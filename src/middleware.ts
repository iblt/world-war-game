import { COOKIES, ENDPOINTS, ROUTES, SECRET_JWT_KEY } from '@/constants'
import { getUserIdByJwt } from '@/helpers'
import { jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { NextResponse, type NextRequest } from 'next/server'

const publicPaths = [ROUTES.LOGIN, ROUTES.REGISTER]
const secret = new TextEncoder().encode(SECRET_JWT_KEY)

export async function middleware(req: NextRequest) {
	const { pathname } = req.nextUrl

	if (
		pathname.startsWith('/_next') ||
		pathname.startsWith('/api') ||
		pathname.startsWith('/favicon') ||
		pathname.startsWith('/assets') ||
		pathname.match(/\.(.*)$/)
	) {
		return NextResponse.next()
	}

	if (publicPaths.some(p => pathname.startsWith(p))) {
		return NextResponse.next()
	}

	const cookieStore = await cookies()
	const accessToken = cookieStore.get(COOKIES.ACCESS_TOKEN)?.value
	const refreshToken = cookieStore.get(COOKIES.REFRESH_TOKEN)?.value

	if (!accessToken) {
		return NextResponse.redirect(new URL(ROUTES.LOGIN, req.url))
	}

	try {
		const result = await jwtVerify(accessToken, secret)
		const userId = getUserIdByJwt(result.payload)

		if (!userId) {
			return NextResponse.redirect(new URL(ROUTES.LOGIN, req.url))
		}

		return NextResponse.next()
	} catch (error) {
		console.error('JWT verification failed:', error)
		if (refreshToken) {
			try {
				const refreshPayload = jwtVerify(refreshToken, secret)
				const userId = getUserIdByJwt(refreshPayload)

				if (!userId) {
					return NextResponse.redirect(new URL(ROUTES.LOGIN, req.url))
				}

				const refreshRes = await fetch(ENDPOINTS.REFRESH, {
					method: 'POST',
					headers: { cookie: req.headers.get('cookie') || '' },
				})

				if (refreshRes.ok) {
					const response = NextResponse.next()

					const setCookie = refreshRes.headers.get('set-cookie')
					if (setCookie) {
						response.headers.set('set-cookie', setCookie)
					}

					return response
				}
			} catch (error) {
				console.error('JWT reverification failed:', error)

				return NextResponse.redirect(new URL(ROUTES.LOGIN, req.url))
			}
		}

		return NextResponse.redirect(new URL(ROUTES.LOGIN, req.url))
	}
}

export const config = {
	matcher: ['/((?!api|_next|.*\\..*).*)'],
}

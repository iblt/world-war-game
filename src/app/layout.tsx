import { QueryProvider } from '@/lib/query'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserratSans = Montserrat({
	variable: '--font-montserrat-sans',
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
	title: 'World War 3',
	description: 'Кто завоюет господство в мире?',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<head>
				<meta name='apple-mobile-web-app-title' content='WW3' />
			</head>
			<body className={montserratSans.className}>
				<QueryProvider>{children}</QueryProvider>
			</body>
		</html>
	)
}

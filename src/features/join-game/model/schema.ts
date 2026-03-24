import * as v from 'valibot'

export const joinGameSchema = v.object({
	playerName: v.pipe(v.string(), v.minLength(2), v.maxLength(20)),
	code: v.pipe(v.string(), v.minLength(4), v.maxLength(10)),
})

export type JoinGameInput = v.InferInput<typeof joinGameSchema>

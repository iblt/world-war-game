import * as v from 'valibot'

export const joinGameSchema = v.object({
	playerName: v.pipe(
		v.string(),
		v.minLength(2, 'Не короче 2 символов'),
		v.maxLength(20, 'Не длинее 20 символов'),
	),
	code: v.pipe(
		v.string(),
		v.minLength(4, 'Не короче 4 символов'),
		v.maxLength(10, 'Не длинее 10 символов'),
	),
})

export type JoinGameInput = v.InferInput<typeof joinGameSchema>

import * as v from 'valibot'

export const createGameSchema = v.object({
	playerName: v.pipe(
		v.string(),
		v.minLength(2, 'Минимум 2 символа'),
		v.maxLength(20, 'Максимум 20 символов')
	),
})

export type CreateGameInput = v.InferInput<typeof createGameSchema>

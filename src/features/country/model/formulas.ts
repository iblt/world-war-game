export function calculateLife({
	baseLife,
	ecology,
	sanctionsCount,
}: {
	baseLife: number
	ecology: number
	sanctionsCount: number
}) {
	const E = ecology / 100
	const S = Math.min(sanctionsCount, 3)

	return Math.round(baseLife * (0.5 + 0.5 * E) * (1 - 0.2 * S))
}

export function calculateIncome({
	life,
	development,
}: {
	life: number
	development: number
}) {
	return Math.round(2.2 * life + 0.8 * development)
}

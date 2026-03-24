export function calculateLife({
	baseLife,
	ecology,
	sanctionsCount,
	development,
}: {
	baseLife: number
	ecology: number
	sanctionsCount: number
	development: number
}) {
	const E = ecology / 100
	const S =
		sanctionsCount > 0 ? (100 - (40 + 5 * (sanctionsCount - 1))) / 100 : 1

	return Math.round((baseLife + development - 60) * E * S)
}

export function calculateIncome({ life }: { life: number }) {
	return Math.round(3 * life)
}

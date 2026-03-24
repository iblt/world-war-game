export function setPlayerId(playerId: string) {
	document.cookie = `playerId=${playerId}; path=/; max-age=31536000`
}

export function getPlayerId() {
	const match = document.cookie.match(/(^| )playerId=([^;]+)/)
	return match ? match[2] : null
}

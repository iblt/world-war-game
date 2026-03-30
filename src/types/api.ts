import { CityTemplate, GameCity, GamePhase } from '@prisma/client'

export interface UserResponse {
	id: number
	name: string
}

export interface Game {
	id: string
	phase: GamePhase
	ecology: number
	round: number
	players: Player[]
	joinCode: string
	hostId: string
	countries: Country[]
	roundStartedAt: Date | null
	roundDuration: number
	isPaused: boolean
	pausedAt: Date | null
}

export interface Country {
	id: string
	name: string
	budget: number
	cities: FullCity[]
	players: Player[]
	nukes: number
	hasNuclearProgram: boolean
	sanctionsFrom: string[]
	sanctionsTo: string[]
}

export interface FullCity extends GameCity {
	template: CityTemplate
}

export interface Player {
	id: string
	name: string
	countryId: string | null
	isPresident: boolean
	playerId: string
}

export type GameEvents =
	| 'player_joined'
	| 'player_left'
	| 'country_selected'
	| 'game_started'
	| 'show_statistics'
	| 'round_started'
	| 'round_ended'

export interface TurnsResult {
	turns: {
		countries: {
			countryName: string
			actions: {
				buildNukes: number
				ecoProgram: boolean
				nuclearTechnology: boolean
				updatedCities: string[]
				protectedCities: string[]
				attackedCities: string[]
				sanctionedCountries: string[]
				sendedMoney: {
					toCountry: string
					amount: number
				}[]
			}
		}[]
		round: number
	}[]
}

export interface TurnMapItem {
	countries: {
		countryName: string
		actions: {
			buildNukes: number
			ecoProgram: boolean
			nuclearTechnology: boolean
			updatedCities: string[]
			protectedCities: string[]
			attackedCities: string[]
			sanctionedCountries: string[]
			sendedMoney: {
				toCountry: string
				amount: number
			}[]
		}
	}[]
}

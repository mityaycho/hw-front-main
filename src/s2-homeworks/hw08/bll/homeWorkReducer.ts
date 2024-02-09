import { UserType } from '../HW8'

type ActionType =
	| { type: 'sort'; payload: 'up' | 'down' }
	| { type: 'check'; payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): UserType[] => { // need to fix any
	switch (action.type) {
		case 'sort': { // by name
			if (action.payload === 'up') {
				state.sort((a: UserType, b: UserType): number => a.name < b.name ? -1 : 1);
			} else if (action.payload === 'down') {
				state.sort((a: UserType, b: UserType): number => a.name > b.name ? -1 : 1);
			}
			return state // need to fix
		}
		case 'check': {
				const filteredState = state.filter((a: UserType): boolean => a.age >= action.payload);
			return filteredState // need to fix
		}
		default:
			return state
	}
}

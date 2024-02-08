import { UserType } from '../HW8'

type ActionType =
	| { type: 'sort'; payload: 'up' | 'down' }
	| { type: 'check'; payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): UserType[] => { // need to fix any
	switch (action.type) {
		case 'sort': { // by name
			if (action.payload === 'up') {
				state.sort((a: UserType, b: UserType): any => a.name > b.name);
			} else if (action.payload === 'down') {
				state.sort((a: UserType, b: UserType): any => a.name < b.name);
			}
			return state // need to fix
		}
		case 'check': {
			return state // need to fix
		}
		default:
			return state
	}
}

import { UserType } from '../HW8'

type ActionType =
	| { type: 'sort'; payload: 'up' | 'down' }
	| { type: 'check'; payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): UserType[] => { // need to fix any
	switch (action.type) {
		case 'sort': { // by name
			let sortedState: UserType[] = [];
			const stateCopy = [...state]
			if (action.payload === 'up') {
				sortedState = stateCopy.sort((a: UserType, b: UserType): number => a.name < b.name ? -1 : 1);
			} else if (action.payload === 'down') {
				sortedState = stateCopy.sort((a: UserType, b: UserType): number => a.name > b.name ? -1 : 1);
			}
			return sortedState; // need to fix
		}
		case 'check': {
			return state.filter((a: UserType): boolean => a.age >= action.payload); // need to fix
		}
		default:
			return state
	}
}

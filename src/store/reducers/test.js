import { TEST } from '../actions/test'

const initialState = {
	test: 'test',
}

const reducer = (state = initialState, { type, payload = null }) => {
	switch (type) {
		case TEST:
			return {
				...state,
				test: payload,
			}
		default:
			return state
	}
}

export default reducer

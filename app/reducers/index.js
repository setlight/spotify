import { merge } from 'ramda'

const initialState = {
	entities: {
		albums: {},
		artists: {},
		tracks: {}
	}
}

export default function entities(state = initialState, action) {
	if (action.response && action.response.entities) {
		return merge(state, action.response.entities)
	}

	return state
}

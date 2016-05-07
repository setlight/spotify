import { merge } from 'ramda'

const initialState = {
    albums: {},
    artists: {},
    tracks: {}
}

export default function entities(state = initialState, action) {
    const response = { action }

    if (response && response.entities) {
        return merge(state, response.entities)
    }

    return state
}

import { merge } from 'ramda'
import { SEARCH_SUCCESS } from 'actions/search'

const initialState = {}

export default function search(state = initialState, action) {
    const { type, response } = action

    if (type === SEARCH_SUCCESS) {
        return merge(state, response)
    }

    return state
}

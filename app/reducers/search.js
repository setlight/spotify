import { merge } from 'ramda'
import { SEARCH_SUCCESS } from '../actions/search'

const initialState = {}

export default function search(state = initialState, action) {
    if (action.type === SEARCH_SUCCESS) {
        return merge(state, action.response)
    }

    return state
}

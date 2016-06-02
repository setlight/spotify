import { stringify } from 'qs'
import { CALL_API } from 'middleware/api'

export const SEARCH_REQUEST = 'SEARCH_REQUEST'
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'
export const SEARCH_FAILURE = 'SEARCH_FAILURE'

export function search(term, type) {
    const params = stringify({
        q: term,
        type
    })

    return {
        [CALL_API]: {
            types: [SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE],
            endpoint: `search?${params}`
        }
    }
}

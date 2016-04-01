import { CALL_API } from '../middleware/api'

export const ARTIST_REQUEST = 'ARTIST_REQUEST'
export const ARTIST_SUCCESS = 'ARTIST_SUCCESS'
export const ARTIST_FAILURE = 'ARTIST_FAILURE'

function fetchArtist(id) {
    return {
        [CALL_API]: {
            types: [ ARTIST_REQUEST, ARTIST_SUCCESS, ARTIST_FAILURE ],
            endpoint: `artists/${id}`
        }
    }
}

export function loadArtist(id, requiredFields = []) {
    return (dispatch, getState) => {
        const artist = getState().entities.artists[id]

        if (artist && requiredFields.every(key => artist.hasOwnProperty(key))) {
            return null
        }

        return dispatch(fetchArtist(id))
    }
}

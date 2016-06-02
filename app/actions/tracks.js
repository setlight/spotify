import { CALL_API } from 'middleware/api'
import Schemas from './schemas'

export const TRACK_REQUEST = 'TRACK_REQUEST'
export const TRACK_SUCCESS = 'TRACK_SUCCESS'
export const TRACK_FAILURE = 'TRACK_FAILURE'

function fetchTrack(id) {
    return {
        [CALL_API]: {
            types: [TRACK_REQUEST, TRACK_SUCCESS, TRACK_FAILURE],
            endpoint: `tracks/${id}`,
            schema: Schemas.TRACK
        }
    }
}

export function loadTrack(id, requiredFields = []) {
    return (dispatch, getState) => {
        const track = getState().entities.tracks[id]

        if (track && requiredFields.every(key => track.hasOwnProperty(key))) {
            return null
        }

        return dispatch(fetchTrack(id))
    }
}

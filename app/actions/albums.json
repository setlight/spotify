import { CALL_API } from '../middleware/api'

export const ALBUM_REQUEST = 'ALBUM_REQUEST'
export const ALBUM_SUCCESS = 'ALBUM_SUCCESS'
export const ALBUM_FAILURE = 'ALBUM_FAILURE'

function fetchAlbum(id) {
    return {
        [CALL_API]: {
            types: [ ALBUM_REQUEST, ALBUM_SUCCESS, ALBUM_FAILURE ],
            endpoint: `albums/${id}`
        }
    }
}

function loadAlbum(id, requiredFields = []) {
    return (dispatch, getState) => {
        const album = getState().entities.albums[id]

        if (album && requiredFields.every(key => album.hasOwnProperty(key))) {
            return null
        }

        return dispatch(fetchAlbum(id))
    }
}

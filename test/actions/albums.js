import test from 'ava'
import { CALL_API } from '../../app/middleware/api'
import { loadAlbum } from '../../app/actions/albums'
import { configureStore } from '../test-utils/mock-store'

const initialState = {
    entities: {
        albums: {
            103: 'Mardi Gras'
        }
    }
}

let store

test.beforeEach(() => {
    store = configureStore(initialState)
})

test('load album', t => {
    store.dispatch(loadAlbum(102))

    const action = store.getActions()[0]
    const { types, endpoint } = action[CALL_API]

    t.is(types.length, 3)
    t.is(endpoint, 'albums/102')
})

test('load cached album', t => {
    store.dispatch(loadAlbum(103))

    const actions = store.getActions()

    t.is(actions.length, 0)
})

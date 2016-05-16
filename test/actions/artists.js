import test from 'ava'
import { CALL_API } from '../../app/middleware/api'
import { loadArtist } from '../../app/actions/artists'
import { configureStore } from '../test-utils/mock-store'

const initialState = {
    entities: {
        artists: {
            103: 'Creedence Clearwater Revival'
        }
    }
}

let store

test.beforeEach(() => {
    store = configureStore(initialState)
})

test('load artist', t => {
    store.dispatch(loadArtist(102))

    const action = store.getActions()[0]
    const { types, endpoint } = action[CALL_API]

    t.is(types.length, 3)
    t.is(endpoint, 'artists/102')
})

test('load cached artist', t => {
    store.dispatch(loadArtist(103))

    const actions = store.getActions()

    t.is(actions.length, 0)
})

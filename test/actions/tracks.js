import test from 'ava'
import { CALL_API } from '../../app/middleware/api'
import { loadTrack } from '../../app/actions/tracks'
import { configureStore } from '../test-utils/mock-store'

const initialState = {
    entities: {
        tracks: {
            103: 'Green River'
        }
    }
}

let store

test.beforeEach(() => {
    store = configureStore(initialState)
})

test('load track', t => {
    store.dispatch(loadTrack(102))

    const action = store.getActions()[0]
    const { types, endpoint } = action[CALL_API]

    t.is(types.length, 3)
    t.is(endpoint, 'tracks/102')
})

test('load cached track', t => {
    store.dispatch(loadTrack(103))

    const actions = store.getActions()

    t.is(actions.length, 0)
})

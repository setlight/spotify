import test from 'ava'
import reducer from '../../app/reducers/entities'

test('initial state', t => {
    const initialState = {
        albums: {},
        artists: {},
        tracks: {}
    }

    const state = reducer(undefined, {})

    t.deepEqual(state, initialState)
})

test('handle action with response and entities', t => {
    const entities = {
        artists: {
            name: 'Beyoncé',
            id: 10
        }
    }

    const action = {
        response: {
            entities
        }
    }

    const state = reducer(undefined, action)

    t.deepEqual(state.artists, action.response.entities.artists)
})

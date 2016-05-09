import test from 'ava'
import reducer from '../../app/reducers/error'

test('initial state', t => {
    const state = reducer(undefined, {})

    t.is(state, null)
})

test('handle action with error', t => {
    const action = {
        error: 'There has been an error'
    }

    const state = reducer(undefined, action)

    t.is(state, action.error)
})

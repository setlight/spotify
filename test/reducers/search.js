import test from 'ava'
import { SEARCH_SUCCESS } from '../../app/actions/search'
import reducer from '../../app/reducers/search'

test('initial state', t => {
    const state = reducer(undefined, {})

    t.deepEqual(state, {})
})

test('handle action with success type and response', t => {
    const response = {
        result: 1
    }

    const action = {
        type: SEARCH_SUCCESS,
        response
    }

    const state = reducer(undefined, action)

    t.deepEqual(state, action.response)
})

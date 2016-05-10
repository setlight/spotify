import test from 'ava'
import { CALL_API } from '../../app/middleware/api'
import { search } from '../../app/actions/search'

test('search artist', t => {
    const action = search('Michael Jackson', 'artist')

    const { types, endpoint } = action[CALL_API]

    t.is(types.length, 3)
    t.is(endpoint, 'search?q=Michael%20Jackson&type=artist')
})

test('search album', t => {
    const action = search('Mardi Gras', 'album')

    const { types, endpoint } = action[CALL_API]

    t.is(types.length, 3)
    t.is(endpoint, 'search?q=Mardi%20Gras&type=album')
})

test('search track', t => {
    const action = search('Secret Agent Man', 'track')

    const { types, endpoint } = action[CALL_API]

    t.is(types.length, 3)
    t.is(endpoint, 'search?q=Secret%20Agent%20Man&type=track')
})

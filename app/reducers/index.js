import { combineReducers } from 'redux'
import entities from './entities'
import search from './search'
import error from './error'

const rootReducer = combineReducers({
    entities,
    search,
    error
})

export default rootReducer

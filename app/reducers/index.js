import { combineReducers } from 'redux'
import entities from './entities'
import search from './search'

const rootReducer = combineReducers({
    entities,
    search
})

export default rootReducer

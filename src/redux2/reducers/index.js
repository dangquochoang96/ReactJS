import {combineReducers} from 'redux'
import {coronaReducer} from './corona'

const rootReducer = combineReducers({
    corona: coronaReducer
})
export default rootReducer
import { combineReducers } from 'redux'
import { counterReducer } from './counter'
//Sau nay co them Reducer thi Import vao
const rootReducer = combineReducers({
    counter: counterReducer
})

export default rootReducer
//Sau nay se truyen luu vao Store
import * as types from './type'

//Định nghĩa hành động
export const incrementCounter = (val) => ({
    type: types.INCREMENT, val
})
export const decrementCounter = (val) => ({
    type: types.DECREMENT, val
})
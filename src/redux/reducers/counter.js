import * as types from '../actions/type'

// Tao ra state mac dinh
const initialState = {
    count: 0
}
export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.INCREMENT:
            return { ...state, count: action.val + 1 }
        case types.DECREMENT:
            return { ...state, count: action.val - 1 }
        default:
            return state;
    }
}
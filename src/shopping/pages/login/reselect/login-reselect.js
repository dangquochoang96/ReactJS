import { createSelector } from 'reselect'

const loginSelector = state => state.login
const tokenSelector = state => state.token

export const messagesErrorLogin = createSelector(
    loginSelector,
    item => item.error
)

export const loadingLogin = createSelector(
    loginSelector, 
    item => item.loading 
)
export const getTokenLogin = createSelector(
    tokenSelector, 
    item => item.token
)
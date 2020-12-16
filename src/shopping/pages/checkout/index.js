import React from 'react'
import ConfirmComponent from './components/confirm'
import CheckoutComponent from './components/warning'
import * as helpers from '../../helpers/authentication'
import * as reselect from '../login/reselect/login-reselect'
import { createStructuredSelector } from 'reselect'
import { useSelector } from 'react-redux'
import LayoutComponent from '../../components/layout'

const AppCheckout = () => {
    const { token } = useSelector(createStructuredSelector({
        token: reselect.getTokenLogin
    }))
    const checkLogin = helpers.isLogin(token)
    return (
        <>
            <LayoutComponent>
                {checkLogin ? (<ConfirmComponent />) : (<CheckoutComponent />)}
            </LayoutComponent>
        </>
    )
}

export default React.memo(AppCheckout)
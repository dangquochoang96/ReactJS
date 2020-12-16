import React from "react"
import ButtonComponents from "./components/button"
import Result from "./components/result"
import { Provider } from 'react-redux'
import store from './store/index'

const AppRedux = () => {
    return (
        <Provider store={store}>
            <Result />
            <ButtonComponents name="increment"> + </ButtonComponents>
            <ButtonComponents name="decrement"> - </ButtonComponents>
        </Provider>

    )
}
export default React.memo(AppRedux)
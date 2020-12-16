import React from 'react'
import CovidApp from './page/covid'
import {Provider} from 'react-redux'
import configStore from './store/index'

const { store } = configStore()

const Corona = () => {
    return(
        <Provider store={store}>
            <CovidApp/>
        </Provider>
    )
}
export default Corona
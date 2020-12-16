import React from 'react'
import MyProvider from './global/my-provider'
import HeaderPage from './components/header'
import FooterPage from './components/footer'
import Motorbike from './components/motorbike'

class ContextApp extends React.Component{
    render(){
        return(
        <MyProvider>
            <HeaderPage/>
            <Motorbike/>
            <FooterPage/>
        </MyProvider>
        )
    }
}
export default ContextApp
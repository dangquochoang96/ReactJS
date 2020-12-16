import React from "react"
import MyContext from "./mycontext"
import { api } from "../service/api"

class MyProvider extends React.Component{
    constructor(){
        super();
        this.state = {
            loading: false,
            virus: []
        }
    }
    setStateAsync = (state) => {
        return new Promise((resolve) => {
            this.setState(state, resolve);
        })
    }
    async componentDidMount(){
        this.setStateAsync({loading:true})
        const data = await api.getDataVirusCorona()
        await this.setStateAsync({
            ...this.state, loading: false, virus: data
        })
    }
    render(){
        return(
            <MyContext.Provider
            value={this.state}
            >
                {this.props.children}
            </MyContext.Provider>
        )
    }
}
export default MyProvider
import React from "react"
import HeaderPage from "./components/header"

class Lifecycle extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 10
        }
        console.log(`constructor of Lifecycle`)
    }
    static getDerivedStateFromProps(props, state) {
        //Cap nhat lai state ban dau thong qua props cua components
        console.log(`getDerivedStateFromProps of parents : ${props} - ${state}`)
        console.log(props)
        console.log(state)
        return null
    }
    clickButton = () => {
        this.setState({ ...this.state, count: this.state.count + 1 })
    }
    render() {
        return ( 
            <>
            <p>{this.state.count}</p> 
            <button onClick = { this.clickButton }> Click </button> <HeaderPage count = { this.state.count }/> 
            </>
        )
    }
}
export default Lifecycle

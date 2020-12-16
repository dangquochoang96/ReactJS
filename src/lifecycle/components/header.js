import React from "react"

class HeaderPage extends React.PureComponent {
    constructor(){
        super();
        this.state = {
            number : 0
        }
    }
    static getDerivedStateFromProps(props, state){
        //Cap nhat lai state ban dau thong qua props cua components
        console.log(`getDerivedStateFromProps : ${props} - ${state}`)
        console.log(props)
        console.log(state)
        if (props.count !== state.number) {
            return { number: props.count };
        }
        return null; 
    }
    render() {
        console.log(`Header Componnet da duoc render`)
        return (
            <>
                <header>
                    <h1>Day la Header - {this.props.count}</h1>
                </header>
            </>
        )
    }
}
export default HeaderPage
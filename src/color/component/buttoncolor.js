import React from 'react'

class ButtonColor extends React.Component{
    render(){
        return(
            <>
                <button onClick={this.props.click} name={this.props.name}>{this.props.children}</button>
            </>
        )
    }
}
export default ButtonColor
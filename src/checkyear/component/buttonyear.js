import React from 'react'

class ButtonYear extends React.Component{
    render(){
        return(
            <>
                <button onClick={this.props.click}>{this.props.children}</button>
            </>
        )
    }
}
export default ButtonYear
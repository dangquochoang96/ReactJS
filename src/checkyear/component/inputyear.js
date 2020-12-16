import React from 'react'

class InputYear extends React.Component{
    render(){
        return(
            <>
                <input className="input" defaultValue={this.props.year}
                    className="input"
                    defaultValue={this.props.year}
                    onChange={this.props.change}
                />
            </>
        )
    }
}
export default InputYear
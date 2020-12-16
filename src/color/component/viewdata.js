import React from 'react'

class ViewData extends React.Component{
    render(){
        return(
            <>
                <div style={{width: '300px', height: '300px', border: '1px solid blue', backgroundColor: this.props.color}}></div>
            </>
        )
    }
}
export default ViewData
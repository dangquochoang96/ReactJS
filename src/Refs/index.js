import React from "react"
import ContentInput from "./component/content"

class RefsApp extends React.Component{
    constructor(){
        super()
        //Tao ra 1 refs de truy cap vao DOM node element khi render ra 
        this.DOMInfo = React.createRef()
        this.InputInfo = React.createRef()
    }
    showDomInfo = () => {
        console.log(this.DOMInfo.current.id)
    }
    getDataInput = () => {
        const data = this.InputInfo.current.state.text
        console.log(data)
        alert(data)
    }
    render(){
        return(
            <>
            <h1 ref={this.DOMInfo} id="title" name="title">Noi Dung</h1>
            <ContentInput ref={this.InputInfo}/>
            <br/>
            <button onClick={this.showDomInfo}>Lay thong tin Noi Dung</button>
            <button onClick={this.getDataInput}>Lay du lieu</button>
            </>
        )
    }
}
export default RefsApp
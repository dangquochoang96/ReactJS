//Dinh nghia higher order component
//No la function: Nhan vao tham so la 1 component va tra ve 1 component moi
import React from "react"

const HOC = (MyComponent, data) => {
    //MyComponent là 1 component truyen vao nhu 1 tham so cua ham
    //Ham bat buoc return ve 1 component moi (MyComponent)
    return class extends React.Component {
        constructor() {
            super();
            this.state = {
                data: data
            }
        }
        render(){
            return (
                <MyComponent {...this.props} data={this.state.data} />
            )
        }
    }
}
export default HOC
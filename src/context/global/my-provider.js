import React from 'react'
import MyContext from '../global/my-context'

//Tạo provider để chia sẻ dữ liệu
class MyProvider extends React.Component{
    //Thao tác dữ liệu cần chia sẻ. 
    constructor(){
        super();
        this.state = {
            motorbike: [
                {name: 'Wave Tàu', price: 1000, color: 'white'},
                {name: 'Dream Thái', price: 500, color: 'black'},
                {name: 'Dylan', price: 800, color: 'red'}
            ]
        }
    }
    render(){
        return(
            <MyContext.Provider value={this.state.motorbike}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}
export default MyProvider
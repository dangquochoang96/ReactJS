import React, { useState } from 'react'

//Hook chỉ sử dụng trong Function Component
const Counter = () => {
//Tạo ra State bằng Hooks useState
    const [count, setCount] = useState(0);
    //Count là State được khau báo
    //setCount là phương thức (hàm) thay đổi State Count
    //Giá trị 0 trong useState là giá trị mặc định gán cho State Count
    const decrementNumber = () => {
        setCount(count + 1);
        // = this.setState({count: this.state.count+1})
    }
    const incrementNumber = () => {
        setCount(count - 1)
    }
    return (
        <>
            <h1>{count}</h1>
            <button onClick={decrementNumber}> + </button>
            <button onClick={incrementNumber}> - </button>
        </>
    )
}
export default React.memo(Counter)
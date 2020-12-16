import React from 'react'
import InputYear from './component/inputyear'
import ButtonYear from './component/buttonyear'
import Result from './component/result'

class CheckYear extends React.Component {
    constructor() {
        super()
        this.state = {
            year: null,
            message: null
        }
    }
    changeInput = (e) => {
        let valYear = e.target.value; //Lấy ra giá trị người dùng nhập vào ô input
        //Cập nhật vào State
        this.setState({ year: valYear })
    }
    checkLeapYear = () => {
        let year = this.state.year
        if (!isNaN(year) && year.length > 0) {
            //thực sự là số
            year = parseInt(year);

            //Kiểm tra năm nhuận
            if (year % 400 === 0) {
                this.setState({ message: `${year} là năm nhuận` })
            } else if (year % 4 === 0 && year % 100 !== 0) {
                this.setState({ message: `${year} là năm nhuận` })
            } else {
                this.setState({ message: `${year} không phải là năm nhuận` })
            }
        } else {
            this.setState({ message: `${year} không phải là năm nhuận` })
        }
    }
    render() {
        //console.log(this.state.year)
        return (
            <>
                <InputYear change={this.changeInput} year={this.state.year} />
                <ButtonYear click={this.checkLeapYear}>Kiểm Tra</ButtonYear>
                <Result Result={this.state.message}></Result>
            </>
        )
    }
}
export default CheckYear
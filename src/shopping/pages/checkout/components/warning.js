//Hien thi nguoi dung chua la thanh vien hoac chua login vao website. 
import React from 'react'
import { Row, Col } from 'antd'
import { Link } from 'react-router-dom'

const CheckoutComponent = () => {
    return (
        <>
            <Row>
                <Col span={12} offset={6}>
                    <h1 style={{ textAlign: 'center' }}>Checkout</h1>
                </Col>
            </Row>
            <Row>
                <Col span={12} offset={3}>
                    <Row>
                        <Col span={12}><h3>Vui long xac nhan thong tin</h3></Col>
                        <Col span={12}><p>Neu da co tai khoan thi bam vao <Link to="/login">day</Link> de Dang Nhap</p></Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}
export default React.memo(CheckoutComponent)
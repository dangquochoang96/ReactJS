import React, { useState, useEffect } from "react"
import { Row, Col, Card, Skeleton, Button, Pagination } from "antd"
import { api } from '../../service/api'
import AppUsers from "../../user";

const { Meta } = Card;
const ListUsers = () => {
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)
    const [totalItem, setTotalItem] = useState(0)
    const [user, setListUser] = useState([])
    const [previous, showPrevious] = useState(false)
    const [next, showNext] = useState(false)

    useEffect(() => {
        //Viết hàm để lấy dữ liệu API về. 
        const getData = async () => {
            setLoading(true) //Bắt đầu call vào API get Data
            const dataUser = await api.getListDataUsers(page)
            if (dataUser) {
                //Cập nhật lại data user
                setListUser(dataUser.data)
                //Cập nhật totalItem 
                setTotalItem(dataUser.total)
                //Cập nhật Total Page
                setTotalPage(dataUser.total_pages)
                //Cập nhật lại Loading không Load nữa
                setLoading(false)

                //Phân trang
                //Giới hạn Page
                if (page < 1) {
                    setPage(1)
                } else if (page > dataUser.totalPage) {
                    setPage(dataUser.totalPage)
                }
                //Kiểm tra hiển thị nút Previous
                if (page > 1) {
                    showPrevious(true)
                } else {
                    showPrevious(false)
                }
                //Kiểm tra hiển thị nút Next
                if (page < dataUser.total_pages) {
                    showNext(true)
                } else {
                    showNext(false)
                }
            }
        }
        getData();
    }, [page]) //Ám chỉ sử dụng giống như ComponentDidMount bên Class Component
    //Viết hàm chuyển trang
    const previousAndNextPage = (type) => {
        //type : biết được đang bấm Next hay Previous
        if (type === 'previous') {
            //Cập nhật giảm State Page xuống 1
            if (page > 1) {
                setPage(page - 1)
            }
        } else if (type === 'next') {
            if (page < totalPage) {
                setPage(page + 1)
            }
        }
    }
    const changePage = (pages) => {
        setPage(pages)
    }
    if (loading || user.length === 0) {
        return (<Skeleton active />)
    }
    return (
        <>
            <Row style={{ marginTop: '20px', marginBottom: '20px' }}>
                {user.map((item, index) => (<Col span={8}>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt={item.last_name} src={item.avatar} />}
                    >
                        <Meta title={item.first_name} description={item.email} />
                    </Card>
                </Col>))}

            </Row>
            <Row style={{ marginTop: '20px', marginBottom: '60px', textAlign: 'center' }}>
                <Col span={24}>
                    <Pagination current={page} pageSize={3} total={totalItem} onChange={(pages) => changePage(pages)}></Pagination>
                </Col>
            </Row>
            <Row style={{ marginTop: '20px', marginBottom: '60px', textAlign: 'center' }}>
                <Col span={12} offset={6}>
                    {previous && (<Button type="primary" onClick={() => previousAndNextPage('previous')}>Previous</Button>)}
                    {next && (<Button type="primary" onClick={() => previousAndNextPage('next')} style={{ marginLeft: '10px' }}>Next</Button>)}
                </Col>
            </Row>
        </>
    )
}
export default React.memo(ListUsers)
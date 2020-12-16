import React from "react"
import {Layout, Row, Col} from "antd"
import HeaderPage from "./header"
import FooterPage from "./footer"
import PropType from "prop-types"

const {Content} = Layout
const LayoutPage = (props) => {
    return(
        <>
            <Layout>
                <HeaderPage></HeaderPage>
                <Content>
                    <Row>
                        <Col span={12} offset={6}>{props.children}</Col>
                    </Row>
                </Content>
                <FooterPage></FooterPage>
            </Layout>
        </>
    )
}
LayoutPage.propTypes = {
    children: PropType.node
}
export default React.memo(LayoutPage)
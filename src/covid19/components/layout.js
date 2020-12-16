import React from "react"
import PropTypes from 'prop-types';
import { Layout } from "antd"
import HeaderPage from "./header"
import FooterPage from "./footer"
const { Content } = Layout

const LayoutPage = (props) => {
	return(
		<Layout>
			<HeaderPage />
				<Content> {props.children} </Content>
			<FooterPage />
		</Layout>
		)
}
LayoutPage.propTypes = {
	children: PropTypes.node.isRequired
}
export default LayoutPage
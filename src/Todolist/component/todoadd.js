import React from "react"
import PropTypes from "prop-types"
import { Input, Row, Col } from "antd"

const { Search } = Input;
class TodoAdd extends React.PureComponent {
    render() {
        return (
            <Row>
                <Col span={24}>
                    <Search
                        placeholder="input search text"
                        enterButton="Search"
                        size="large"
                        onSearch={value => this.props.add(value)}
                        onChange={this.props.change}
                        value={this.props.value}
                    />
                </Col>
            </Row>
        )
    }
}
TodoAdd.propTypes = {
    add: PropTypes.func,
    change: PropTypes.func,
    value: PropTypes.string
}
export default TodoAdd
// tao 1 component
import React from 'react';
// import thu vien reactjs
// import css
import './common.css';

// tao 1 class component
class HeaderPage extends React.Component {

    render() {
        console.log(this.props.color);
        // hien thi giao dien
        return (
            <header style={{ backgroundColor: this.props.color }}>
                <h1 className="titleHeading">This is header</h1>
            </header>
        )
    }
}
export default HeaderPage;
import React from 'react';
import HeaderPage from './Partials/HeaderPage';
import NavbarPage from './Partials/NavbarPage';
import FooterPage from './Partials/FooterPage';

class IndexPage extends React.Component {
    render() {
        return (
            <>
                <HeaderPage
                    color="yellow"
                    title="header page"
                />
                <NavbarPage />
                {this.props.children}
                <FooterPage />
            </>
        )
    }
}
export default IndexPage;
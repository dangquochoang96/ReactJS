import React from 'react';
// import cac component ma chung ta da tao ra
import IndexPage from '../Components/index';

class HomePage extends React.Component {
    // comment js
    render() {
        return (
            <React.Fragment>
                {/* cu phap comment trong jsx */}
                <IndexPage>
                    <section>
                        <h2>This is home page</h2>
                    </section>
                </IndexPage>
            </React.Fragment>
        );
    }
}
export default HomePage;
import React from 'react';
import Content from './components/content';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            color: 'red',
            show: true
        }
    }
    changeColor = () => {
        this.setState({ ...this.state,
            color: this.state.color === 'red' ? 'yellow' : 'red'
        });
    }

    showHideContent = () => {
        this.setState({ ...this.state,
            show: !this.state.show
        })
    }

    render() {
        return ( 
            <>
            <button onClick={this.changeColor}>change color</button> 
            { this.state.show ? (<Content color={this.state.color} />) : null }
            <button onClick={this.showHideContent}>show/hide</button> 
            </>
        )
    }
}
export default App;
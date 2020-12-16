import React from "react"
import HeaderPage from "./component/header";

class MemoApp extends React.Component {
	constructor() {
		super();
		this.state = {
			count: 0
		}
	}
	changeCount = () => {
		this.setState({ ...this.setState, count: this.state.count + 1 })
	}
	render() {
		return (
			<>
				<HeaderPage counter={this.state.count} />
				<h1>{this.state.count}</h1>
				<button onClick={this.changeCount}>+</button>
			</>
		)
	}

}
export default MemoApp

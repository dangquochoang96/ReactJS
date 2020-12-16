import React from "react"
import LayoutPage from "./components/layout.js"
import Global from "./components/global.js"
import Country from "./components/country.js"
import MyProvider from "./context/myprovider"

class Corona extends React.Component {
    render() {
        return (
            <MyProvider>
				<LayoutPage>
					<Global />
					<Country />
				</LayoutPage>
			</MyProvider>
        )
    }
}
export default Corona
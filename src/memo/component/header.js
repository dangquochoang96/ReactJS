import React from "react"
import PropTypes from "prop-types"

const HeaderPage = (props) => {
    console.log('đã render')
    return(
        <>
            <header>
                <h2>This is header - {props.counter}</h2>
            </header>
        </>
    )
}
HeaderPage.propTypes = {
    counter: PropTypes.number
}
export default React.memo(HeaderPage)
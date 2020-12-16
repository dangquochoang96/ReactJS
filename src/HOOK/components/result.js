import React from 'react'
import PropTypes from 'prop-types'

const Result = (props) => {
    return(
        <>
            <p>{props.result}</p>
        </>
    )
}
Result.propTypes = {
    result: PropTypes.string, 
}
export default React.memo(Result)
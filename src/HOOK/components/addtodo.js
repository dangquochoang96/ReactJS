import React from 'react'
import PropTypes from 'prop-types'
const AddTodo = (props) => {
    return(
        <>
            <input value={props.value} type={props.type} onChange={props.change}></input>
            <button type={props.typeButton} onClick={() => props.add(props.value)}>{props.children}</button>
        </>
    )
}
AddTodo.propTypes = {
    type: PropTypes.string, change: PropTypes.func.isRequired, typeButton: PropTypes.string, value: PropTypes.string, add: PropTypes.func.isRequired, children: PropTypes.string
}

export default React.memo(AddTodo)
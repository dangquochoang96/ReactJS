import React from "react"
import PropTypes from "prop-types"

const ListTodo = (props) => {
    return(
        <>
            <ul>
                {props.todo.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
                
            </ul>
        </>
    )
}
ListTodo.propTypes = {
    todo: PropTypes.array
}
export default React.memo(ListTodo)
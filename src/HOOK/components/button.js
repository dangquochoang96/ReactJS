import React from "react"
import PropType from "prop-types"

const ButtonNumber = (props) => {
    return (
        <>
            <button type={props.type} onClick={() => props.giaipt()}>{props.children}</button>
        </>
    )
}
ButtonNumber.propTypes = {
    type: PropType.string, giaipt: PropType.func, children: PropType.string
}
export default React.memo(ButtonNumber)
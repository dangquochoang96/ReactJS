import React from 'react'
import PropTypes from 'prop-types'

//function component
const Button = (props) => {
    return(
        <>
            <button type={props.type} onClick={props.click}>
                {props.children}
            </button>
        </>
    )
}

//check type props
Button.propTypes = {
    //Kieu du lieu cua props type la string va bat buoc phai truyen vao khi su dung component
    type: PropTypes.string.isRequired, click: PropTypes.func.isRequired, children: PropTypes.string.isRequired
}
//gán giá trị mặc định cho props
Button.defaultProps = {
    type: 'button'
}
export default Button
import React from "react"
import PropTypes from "prop-types"
import * as action from '../actions/index'
import { useSelector, useDispatch } from 'react-redux'

const ButtonComponents = (props) => {
    const dispatch  = useDispatch()
    const count = useSelector(state => state.counter.count)

    const clickButton = () => {
        if (props.name === 'increment') {
            dispatch(action.incrementCounter(count))
        } else if (props.name === 'decrement') {
            dispatch(action.decrementCounter(count))
        }
    }
    return (
        <button onClick={() => clickButton()}>{props.children}</button>
    )
}
ButtonComponents.propTypes = {
    children: PropTypes.string.isRequired
}
export default React.memo(ButtonComponents)
import { applyMiddleware, createStore } from 'redux'
import rootReducer from '../reducers/index'
import logger from 'redux-logger'
import createSagaMiddle from 'redux-saga'
import rootSaga from '../saga/index'

const sagaMiddleware = createSagaMiddle()

const configStore = () => {
    const store = createStore(
        rootReducer, {}, applyMiddleware(sagaMiddleware, logger)
    )
    sagaMiddleware.run(rootSaga)
    return { store: store }
}

export default configStore
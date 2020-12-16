import { put, call, takeEvery } from 'redux-saga/effects' 
import * as actions from '../actions/index'
import * as api from '../service/index'
import { GET_DATA_CORONA } from '../actions/type'

function* getDataVirusSaga() {
    try {
        //Dispatch Action Loading - Bat dau call Data tu API ve
        yield put(actions.startGetDataVirus(true))
        const data = yield call(api.getDataVirusCorona)
        if(data){
            yield put(actions.getDataCoronaSuccess(data))
        } else {
            yield put(actions.getDataCoronaFail({
                code: 500, message: 'not found data'
            }))
        }
    } catch (error) {
        console.log(error)
    }
}

export function* watchGetDataVirusSaga() {
    //theo doi action
    yield takeEvery(GET_DATA_CORONA, getDataVirusSaga)
}
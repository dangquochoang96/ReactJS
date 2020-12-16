import * as types from './type'

export const getDataVirusCorona = () => ({
    type: types.GET_DATA_CORONA
})

//Action của Redux Saga sẽ xử lý
export const startGetDataVirus = (loading) => ({
    type: types.START_GET_DATA, loading
})
export const getDataCoronaSuccess = (corona) => ({
    type: types.GET_DATA_CORONA_SUCCESS, corona
})
export const getDataCoronaFail = (error) => ({
    type: types.GET_DATA_CORONA_FAIL, error
})
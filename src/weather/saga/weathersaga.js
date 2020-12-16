import { put, call, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions/index';
import { GET_CURRENT_WEATHER } from '../actions/type';
import * as api from '../service/api';
import * as helpers from '../helper/common';

function* currentWeatherSaga({ city }) {
  try {
    yield put(actions.startGetCurrentWeather(true));
    const weather = yield call(api.getCurrentWeather, city);
    if(!helpers.isEmptyObject(weather)){
      if(weather.cod === 200){
        yield put(actions.getCurrentWeatherSuccess(weather));
      } else {
        yield put(actions.getCurrentWeatherFail({
          code: 500,
          message: 'Not found data'
        }))
      }
    } else {
      yield put(actions.getCurrentWeatherFail({
        code: 500,
        message: 'Not found data'
      }));
    }
  } catch (err) {
    //console.log(err);
    yield put(actions.getCurrentWeatherFail(err));
  }
}

export function* watchCurrentWeatherSaga() {
  yield takeLatest(GET_CURRENT_WEATHER, currentWeatherSaga);
}

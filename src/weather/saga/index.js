import { all, call } from 'redux-saga/effects';
import { watchCurrentWeatherSaga } from './weathersaga';

export default function* rootSaga(){
  yield all([
    call(watchCurrentWeatherSaga)
  ])
}
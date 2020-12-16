import { call, put, cancel, cancelled, fork, take, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router'
import * as actions from '../actions/index';
import * as types from '../actions/types';
import { loginApi } from '../../../services/login';

function* logoutSaga() {
  try {
    yield put(actions.logoutSuccess('logout'))
    yield put(actions.deleteTokenLogin(null))
    yield put(push('/login'))
  } catch (e) {
    console.log(e)
  }
}

function* loginSaga(user, pass) {
  try {
    yield put(actions.loginStart(true));
    const response = yield call(loginApi, user, pass);
    if (response) {
      if (response.hasOwnProperty('code') && response['code'] === 200) {
        yield put(actions.loginSuccess(response));
        //Luu token
        yield put(actions.saveTokenLogin(response.token_user))
        yield put(actions.loginStart(false));
        //Cho quay ve trang Home
        yield put(push('/home'))
      } else {
        yield put(actions.loginFailure({
          code: 501,
          message: 'id and password invalid'
        }))
      }
    } else {
      yield put(actions.loginFailure({
        code: 505,
        message: 'can not login'
      }));
    }
  } catch (e) {
    yield put(actions.loginFailure(e));
  } finally {
    if (yield cancelled) {
      //Redux Saga khong the call data tu API ve.
      yield put(actions.loginCancelled({
        code: 500,
        message: 'sync cancelled'
      }))
    }
  }
}

export function* logoutSagaFollow() {
  yield takeLatest(types.LOGOUT, loginSaga)
}

export default function* loginSagaFollow() {
  while (true) {
    //thuc su theo doi loginSaga khi co actions loginRequest cua nguoi dung
    const { user, pass } = yield take(types.LOGIN_REQUEST)
    //Theo doi loginSaga
    const task = yield fork(loginSaga, user, pass)
    //Lay ra hanh dong Logout hay Login bi loi
    const act = yield take([types.LOGOUT, types.LOGIN_FAILURE])
    if (act.type === types.LOGOUT || act.type === types.LOGIN_FAILURE) {
      yield put(actions.loginStart(false))
      yield cancel(task)
      //Xoa bo token
      yield put(actions.deleteTokenLogin(null))
      //Tu dong quay lai dung trang Login
      yield put(push('/login'))
    }
  }
}
import {all} from 'redux-saga/effects';
import photosSagas from "./sagas/photosSagas";
import registerUserSaga from "./sagas/usersSagas";
import historySagas from './sagas/historySagas';
import history from '../history';

export function* rootSagas() {
  yield all([
    ...photosSagas,
    ...registerUserSaga,
    ...historySagas(history),
  ])
}
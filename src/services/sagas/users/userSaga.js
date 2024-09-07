import { takeEvery } from "redux-saga/effects";
import fetchData from "../SagaHelper";

import {
  CREATE_USER,
  LOGIN_USER,
} from "../actions/users/ActionTypes/ApiActionTypes";

function* dataSaga() {
  yield takeEvery(CREATE_USER, fetchData);
  yield takeEvery(LOGIN_USER, fetchData);
}

export default dataSaga;

import { call, put, takeLatest } from "@redux-saga/core/effects";
import * as types from "../action/actionTypes";
import * as actions from "../action/actionCreator";
import { atmService } from "../services/atmService";

export interface ResponseGenerator {
  config?: any;
  data?: any;
  header?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

export default function* watchGetAtmData() {
  yield takeLatest(types.GET_ATM_DATA, workerGetAtmData);
}

export function* workerGetAtmData() {
  try {
    const res: ResponseGenerator = yield call(atmService.getAtms);
    const data = res.data;
    yield put(actions.got_atm_succes(data));
  } catch (error: any) {
    yield put(actions.got_atm_fail(error.message));
  }
}

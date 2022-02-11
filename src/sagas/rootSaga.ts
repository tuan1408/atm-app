import watchGetAtmData from "./atmSaga";
import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([watchGetAtmData()]);
}

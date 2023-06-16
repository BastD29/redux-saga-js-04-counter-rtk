import { delay, put, takeEvery } from "redux-saga/effects";
import { increment /* incrementAsync */ } from "./reducer";

function* incrementAsync() {
  yield delay(1000);
  yield put(increment());
}

// function* incrementAsyncSaga() {
//   yield delay(1000);
//   yield put(increment());
// }

function* watchIncrementAsync() {
  yield takeEvery("counter/incrementAsync", incrementAsync);
  // yield takeEvery(incrementAsync.type, incrementAsyncSaga);
}

export default function* rootSaga() {
  yield watchIncrementAsync();
}

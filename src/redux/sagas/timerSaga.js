import {ACTIONS} from "../constants";
import {put, takeEvery, delay, select, take, call, race} from 'redux-saga/effects'

export function* timerSagaWorker() {
    const cardSet = yield select((store) => store.playWindowReducer.cardSet);
    let isAllOpened = cardSet.every((card) => card.opened);

    while (!isAllOpened) {
        yield delay(1000);
        yield put({type: ACTIONS.UP_TIMER});
    }
}

export function* timerSaga() {
    yield* takeEveryWithRace(ACTIONS.START_TIMER, timerSagaWorker, ACTIONS.STOP_TIMER);
}

export function* takeEveryWithRace(action, saga, cancel) {
    yield takeEvery(action, function* (...args) {
        yield race({ task: call(saga, ...args), cancel: take(cancel) });
    });
}
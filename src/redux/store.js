import {combineReducers, createStore, compose, applyMiddleware} from 'redux'
import {countersReducer, playWindowReducer} from './reducers'
import  createSagaMiddleWare from 'redux-saga'
import {timerSaga} from "./sagas";
const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
    compose;
const sagaMiddleWare = createSagaMiddleWare()

export const store = createStore(
    combineReducers({
        playWindowReducer,
        countersReducer
    }),
    composeEnhancers(
        applyMiddleware(sagaMiddleWare)
    )
);

sagaMiddleWare.run(timerSaga)
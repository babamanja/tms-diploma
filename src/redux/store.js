import {combineReducers, createStore} from 'redux'
import {countersReducer, playWindowReducer} from './reducers'


export const store = createStore(
combineReducers({
    playWindowReducer,
    countersReducer
}));
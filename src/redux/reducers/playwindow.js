import { ACTIONS } from "../sagas/constants";

const defaultState = {

}

export function playWindowReducer (state, action) {
    switch(action.type){
        case ACTIONS.START_GAME:{
            return ''
        }
        default: return defaultState
    }
}
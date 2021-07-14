import {ACTIONS} from "../constants";
import cardsArr from "../../cards.json";

const defaultState = {
    cardSet: [],
    smallCounter: 0,
    bigCounter: 0,
    timeCounter: 0,
    movesCounter: 0,
    isWin: false
}
const getRand = () => {
    return (Math.floor((Math.random() * 24)))
}

export function playWindowReducer(state = defaultState, action) {
    switch (action.type) {
        case ACTIONS.CREATE_CARDSET: {
            let newSet = cardsArr
            return {...state, cardSet: newSet}
        }
        case ACTIONS.SHUFFLE_CARDS: {
            let newSet = state.cardSet
            for (let i = 0; i < 24; i++) {
                let j = getRand();
                [newSet[i], newSet[j]] = [newSet[j], newSet[i]]
            }
            return {...state, cardSet: newSet}
        }
        case ACTIONS.ACTIVATE_CARD: {
            let newSet = state.cardSet.map(card => card.gameId === action.cardId ? {
                ...card,
                active: action.active = true
            } : card)
            return {...state, cardSet: newSet}
        }

        case ACTIONS.DEACTIVATE_CARDS: {
            let newSet = state.cardSet.map(card => !card.opened ? {...card, active: action.active = false} : card)
            return {...state, cardSet: newSet}
        }

        case ACTIONS.UP_SMALL_COUNTER: {
            let newCount = state.smallCounter + 1
            return {...state, smallCounter: newCount}
        }

        case ACTIONS.ZERO_SMALL_COUNTER: {
            let newCount = 0
            return {...state, smallCounter: newCount}
        }

        case ACTIONS.SET_BIG_COUNTER: {
            let newCount = action.cardId
            return {...state, bigCounter: newCount}
        }

        case ACTIONS.OPEN_CARDS: {
            let newCounter = state.bigCounter
            let newSet = state.cardSet
            if (newCounter === -action.cardId) {
                newSet = newSet.map(card => card.gameId === newCounter || card.gameId === -newCounter
                    ? {...card, opened: action.opened = true} : card)
            }
            newCounter = 0
            return {...state, cardSet: newSet, bigCounter: newCounter}
        }

        case ACTIONS.TEST_ALL_OPENED: {
            let newSet = state.cardSet
            newSet = newSet.map(card => card ? {...card, opened: card.opened = true} : card)
            return {...state, cardSet: newSet}
        }

        default:
            return state
    }
}

export function countersReducer (state = defaultState, action){
    switch (action.type){
        case ACTIONS.UP_TIMER: {
            let newTimer = state.timeCounter +1
            return {...state, timeCounter: newTimer}
        }

        case ACTIONS.UP_MOVE_COUNTER: {
            let newCount = state.movesCounter +1
            return {...state, movesCounter: newCount}
        }


        default: return state
    }
}
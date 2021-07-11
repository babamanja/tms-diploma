import './playWindow.css'
import {PlayCard} from "../PlayCard";
import {Button} from "../Button";
import {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {ACTIONS} from "../../redux/constants";
import {Header} from "../Header";


const getID = () => {
    return "_" + Math.random().toString(36).substr(2, 9);
}

export const PlayWindow = () => {

    const cardSet = useSelector((store) => store.playWindowReducer.cardSet)
    const smallCount = useSelector((store) => store.playWindowReducer.smallCounter)
    const timeCounter = useSelector((store) => store.countersReducer.timeCounter)
    const moveCounter = 0
    const dispatch = useDispatch()


    useEffect(() => {
        if (smallCount === 2) {
            setTimeout(() => {
                dispatch({type:ACTIONS.ZERO_SMALL_COUNTER})
                dispatch({type: ACTIONS.DEACTIVATE_CARDS})
            }, 1000)
        }
    }, [smallCount, cardSet])

    useEffect(() => {
        setInterval(() => {dispatch({type: ACTIONS.START_TIMER})}
            , 2000)
    })


    const onClickCard = (cardId, cardActive) => {
        if (!cardActive && smallCount !== 2) {
            dispatch({type: ACTIONS.ACTIVATE_CARD, cardId})
            dispatch({type: ACTIONS.UP_SMALL_COUNTER})
        if (smallCount === 0){
            dispatch({type: ACTIONS.SET_BIG_COUNTER, cardId})}
        if (smallCount === 1){
            dispatch({type: ACTIONS.OPEN_CARDS, cardId})
        }
        }
    }

    return (
        <div>
            <Header time={timeCounter} moves={moveCounter}/>
            <div className='playWindow'>
            {cardSet.map((card) => {
                return (
                    <PlayCard
                        key={getID()}
                        gameId={card.gameId}
                        cardIsActive={card.active}
                        cardIsOpened={card.opened}
                        onclick={() => {
                            onClickCard(card.gameId, card.active)
                        }}/>)
            })
            }
            </div>
            <Button onclick={() => {
                dispatch({type: ACTIONS.CREATE_CARDSET})
                dispatch({type: ACTIONS.SHUFFLE_CARDS})
            }} text='Generate Array'/>
        </div>
    )
}
import './playWindow.css'
import {PlayCard} from "../PlayCard";
import {Button} from "../Button";
import {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {ACTIONS} from "../../redux/constants";
import {Header} from "../Header";


export const PlayWindow = () => {

    const cardSet = useSelector((store) => store.playWindowReducer.cardSet)
    const smallCount = useSelector((store) => store.playWindowReducer.smallCounter)


    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch({type: ACTIONS.STOP_TIMER})
        dispatch({type: ACTIONS.RESET_ALL})
        dispatch({type: ACTIONS.CREATE_CARDSET})
        dispatch({type: ACTIONS.SHUFFLE_CARDS})
        dispatch({type: ACTIONS.START_TIMER})
    },[])

    useEffect(() => {
        if (smallCount === 2) {
            setTimeout(() => {
                dispatch({type: ACTIONS.ZERO_SMALL_COUNTER})
                dispatch({type: ACTIONS.DEACTIVATE_CARDS})
            }, 1000)
        }
    }, [smallCount, cardSet])

    const onClickCard = (cardId, cardActive, cardOpened) => {
        if (!cardOpened && !cardActive && smallCount < 2) {
            dispatch({type: ACTIONS.ACTIVATE_CARD, cardId})
            dispatch({type: ACTIONS.UP_SMALL_COUNTER})
            if (smallCount === 0) {
                dispatch({type: ACTIONS.SET_BIG_COUNTER, cardId})
            }
            if (smallCount === 1) {
                dispatch({type: ACTIONS.OPEN_CARDS, cardId})
                dispatch({type: ACTIONS.UP_MOVE_COUNTER})
                dispatch({type: ACTIONS.CHECK_IF_WIN})

            }
        }
    }

    return (
        <div className='playWindow'>
            <Header/>
            <div className='cardsPane'>
                {cardSet.map((card) => {
                    return (
                        <PlayCard
                            key={card.gameId}
                            gameId={card.gameId}
                            backgroundImage={card.picAddress}
                            cardIsActive={card.active}
                            cardIsOpened={card.opened}
                            onclick={() => {
                                onClickCard(card.gameId, card.active, card.opened)
                            }}/>)
                })
                }
            </div>
            <Button onclick={() => {
                dispatch({type: ACTIONS.STOP_TIMER})
                dispatch({type: ACTIONS.RESET_ALL})
                dispatch({type: ACTIONS.CREATE_CARDSET})
                dispatch({type: ACTIONS.SHUFFLE_CARDS})
                dispatch({type: ACTIONS.START_TIMER})
            }} text='Restart'/>

        </div>
    )
}
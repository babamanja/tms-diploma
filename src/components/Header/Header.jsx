import './header.css'
import {useDispatch, useSelector} from "react-redux";
import {ACTIONS} from "../../redux/constants";
import {Button} from "../Button";

export const Header = () => {
    const dispatch = useDispatch()
    const timeCounter = useSelector((store) => store.playWindowReducer.timeCounter);
    const moveCounter = useSelector((store) => store.playWindowReducer.movesCounter);


    return <div className='header'>
        <div className='counters'>
            <div>Time: {timeCounter}</div>
            <div>Moves: {moveCounter}</div>
        </div>
        <div><Button classname='button' onclick={() => {
            dispatch({type: ACTIONS.STOP_TIMER})
            dispatch({type: ACTIONS.RESET_ALL})
            dispatch({type: ACTIONS.CREATE_CARDSET})
            dispatch({type: ACTIONS.SHUFFLE_CARDS})
            dispatch({type: ACTIONS.START_TIMER})
        }} text='Restart'/></div>

    </div>
}
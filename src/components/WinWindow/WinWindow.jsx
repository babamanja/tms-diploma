import './winwindow.css'
import {Button} from "../Button";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ACTIONS} from "../../redux/constants";

export const WinWindow = () => {

    const dispatch = useDispatch()
    const movesCounter = useSelector((store) => store.playWindowReducer.movesCounter)
    const timeCounter = useSelector((store) => store.playWindowReducer.timeCounter)

    const onclick = () => {

        dispatch({type: ACTIONS.RESET_ALL})
        dispatch({type: ACTIONS.CREATE_CARDSET})
        dispatch({type: ACTIONS.SHUFFLE_CARDS})
        dispatch({type: ACTIONS.START_TIMER})
    }

    return (
        <div>
            WIN!
            Time: {timeCounter}
            Moves: {movesCounter}
            <Link to="/game">
                <Button className='button' onclick={onclick} text='Play Again' classname='button'/>
            </Link>
        </div>
    )
}
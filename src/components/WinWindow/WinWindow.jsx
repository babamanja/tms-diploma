import './winwindow.css'
import {Button} from "../Button";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ACTIONS} from "../../redux/constants";
import React from "react";

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
            <div className='welcomepage'>
                <h2>Congrats!</h2>
                <p>Time: {timeCounter} seconds</p>
                <p>Moves: {movesCounter}</p>
                <h3>Win! Win! Win!</h3>
                <div className='buttons'>
                <Link to="/tms-diploma/game">
                    <Button className='button' onclick={onclick} text='Play Again' classname='button'/>
                </Link>
                <Link to='/tms-diploma/'>
                    <Button classname='button' text='To First Page'/>
                </Link>
                </div>
            </div>
        </div>
    )
}
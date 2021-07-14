import './header.css'
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {ACTIONS} from "../../redux/constants";


export const Header = ({time, moves}) => {
    const timeCounter = useSelector((store) => store.countersReducer.timeCounter);
    const moveCounter = useSelector((store) => store.countersReducer.movesCounter);


    return <div className='header'>
        <h3>Time: {timeCounter} </h3> <h3>Moves: {moveCounter}</h3>
    </div>
}
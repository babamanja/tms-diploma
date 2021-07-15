import './header.css'
import {useSelector} from "react-redux";

export const Header = ({time, moves}) => {
    const timeCounter = useSelector((store) => store.playWindowReducer.timeCounter);
    const moveCounter = useSelector((store) => store.playWindowReducer.movesCounter);


    return <div className='header'>
        <h3>Time: {timeCounter} </h3> <h3>Moves: {moveCounter}</h3>
    </div>
}
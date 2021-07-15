import './winwindow.css'
import {Button} from "../Button";
import {Link} from "react-router-dom";

export const WinWindow = () => {

    return (
        <div>
            WIN!
            <Link to="/game">
                <Button onclick={onclick} text='Play Again' classname='button'/>
            </Link>
        </div>
    )
}
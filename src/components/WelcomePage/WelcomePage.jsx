import {Link} from "react-router-dom";
import {Button} from "../Button";
import React from "react";


export const WelcomePage = () => {

    return (
        <Link to="/game">
            <Button text='New Game' classname='button'/>
        </Link>
    )
}
import {Link} from "react-router-dom";
import {Button} from "../Button";
import React from "react";
import './welcomepage.css'

export const WelcomePage = () => {
    return (
        <div className='welcomepage'>
            <h2>Hello, my friend!</h2>
            <p>Here is the game to check your memory</p>
            <p>Open cards and find the pairs</p>
            <p>You win, when all of them are opened</p>
            <h3>Do your best!</h3>
        <Link to="/tms-diploma/game">
            <Button text='New Game' classname='button'/>
        </Link>
        </div>
    )
}
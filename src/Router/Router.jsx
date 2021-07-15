import './router.css'
import React from "react";
import {WelcomePage} from "../components/WelcomePage";
import {
    BrowserRouter as Router,
    Route,
    Redirect
} from "react-router-dom";

import {PlayWindow} from "../components/PlayWindow";
import {WinWindow} from "../components/WinWindow";
import {useSelector} from "react-redux";

export default function GameRouter() {
    const isWin = useSelector((store) => store.playWindowReducer.isWin)
    return (
        <div className='mainWindow'>
            <Router>
                <Route exact path="/" component={WelcomePage}/>
                <Route path="/game" component={PlayWindow}/>
                <Route path="/win" component={WinWindow}/>
                {isWin ? <Redirect to='/win'/> : ''}
            </Router>
        </div>
    )
}



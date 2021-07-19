import './router.css'
import React from "react";
import {WelcomePage} from "../components/WelcomePage";
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

import {PlayWindow} from "../components/PlayWindow";
import {WinWindow} from "../components/WinWindow";


export default function GameRouter() {

    return (
        <div className='mainWindow'>
            <Router>
                <Route exact path="/" component={WelcomePage}/>
                <Route path="/game" component={PlayWindow}/>
                <Route path="/win" component={WinWindow}/>
            </Router>
        </div>
    )
}



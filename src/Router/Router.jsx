import './router.css'
import React from "react";
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

import {WelcomePage} from "../components/WelcomePage";
import {PlayWindow} from "../components/PlayWindow";
import {WinWindow} from "../components/WinWindow";


export default function GameRouter() {
    return (
        <div className='mainWindow'>
            <Router>
                <Route exact path="/tms-diploma/" component={WelcomePage}/>
                <Route exact path="/tms-diploma/game/" component={PlayWindow}/>
                <Route exact path="/tms-diploma/win/" component={WinWindow}/>
            </Router>
        </div>
    )
}



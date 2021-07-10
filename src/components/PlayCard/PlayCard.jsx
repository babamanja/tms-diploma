import './playCard.css'
import {useEffect, useState} from "react";

export const PlayCard = ({gameId, onclick, cardIsActive = false}) => {

    return (
        <div className={cardIsActive ? 'playCard face' : 'playCard back'} onClick={onclick}>

        </div>
    )
}
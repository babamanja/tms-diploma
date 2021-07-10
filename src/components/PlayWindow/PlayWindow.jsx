import './playWindow.css'
import {PlayCard} from "../PlayCard";
import {Button} from "../Button";
import {useEffect, useState} from "react";
import cardsArr from '../../cards.json'


const getID = () => {
    return "_" + Math.random().toString(36).substr(2, 9);
}
const getRand = () => {
    return (Math.floor((Math.random() * 8)))
}


export const PlayWindow = () => {
    const [gameCards, setGameCards] = useState([])


    const shuffleCards = () => {
        for (let i = 0; i < 8; i++) {
            let j = getRand();
            [cardsArr[i], cardsArr[j]] = [cardsArr[j], cardsArr[i]]
        }
        return cardsArr
    }

    const startGame = () => {
        setGameCards(shuffleCards())
    }

    const activateCard = (cardId) => {
        gameCards.map(card => card.gameId === cardId ? card.active = true : null)
        return gameCards
    }

    const onClickCard = (cardId) => {
        setGameCards(activateCard(cardId))
    }

    return (
        <div className='playWindow'>
            {gameCards.map((card) => {
                return (
                    <PlayCard
                        key={getID()}
                        gameId={card.gameId}
                        cardIsActive={card.active}
                        onclick={() => {
                            onClickCard(card.gameId)
                        }}/>)
            })
            }
            <Button onclick={() => {
                startGame()
            }} text='Generate Array'/>
        </div>
    )
}
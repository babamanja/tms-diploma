import './playCard.css'

export const PlayCard = ({gameId, onclick, cardIsActive = false, cardIsOpened = false}) => {

    return (
        <div className={cardIsActive || cardIsOpened ? 'playCard face' : 'playCard back'} onClick={onclick}>

        </div>
    )
}
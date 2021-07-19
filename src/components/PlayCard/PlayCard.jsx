import './playCard.css'

export const PlayCard = ({gameId, onclick, cardIsActive = false, cardIsOpened = false, backgroundImage}) => {
    const backImage = 'gallery/rik.png'
    return (
        <div className={'playCard'}
             onClick={onclick}
             style={{backgroundImage: `url(${cardIsActive || cardIsOpened ? backgroundImage : backImage})`}}>
            {/*{gameId}*/}
        </div>
    )
}
import './playCard.css'

export const PlayCard = ({gameId, onclick, cardIsActive = false, cardIsOpened = false, backgroundImage}) => {
    const backImage = 'https://sib.fm/storage/article/March2021/IDsV2DD5Qhwj5kWTpfYG.jpeg'
    return (
        <div className={'playCard'}
             onClick={onclick}
             style={{backgroundImage: `url(${cardIsActive || cardIsOpened ? backgroundImage : backImage})`}}>
            {gameId}
        </div>
    )
}
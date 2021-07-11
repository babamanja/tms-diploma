import './header.css'

export const Header = ({time, moves}) => {
    return <div>
        <h3>Time: {time}</h3>
        <h3>Moves: {moves}</h3>
    </div>
}
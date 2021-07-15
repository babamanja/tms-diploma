import './button.css'

export const Button = ({onclick, classname, text}) => {

    return (
        <button onClick={onclick} className={classname}> {text}</button>
    )
}
import './itemList.css'

export const ItemList = ({inputName, valueArr = []}) => {

    return (
        <select name={inputName}>
            {valueArr.map(item => <option value={item}>{item}</option>
            )}
        </select>
    )
}
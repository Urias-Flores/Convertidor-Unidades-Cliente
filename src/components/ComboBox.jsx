
const ComboBox = ( { items} ) => {
    let counter = 0
    return (
        <select className="comboBox">
            {Object.keys(items).map( item => <option value={item} key={item}>{items[item]}</option>)}
        </select>
    )
}
export default ComboBox
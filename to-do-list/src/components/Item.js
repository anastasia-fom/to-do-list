const Item = (props) => {
    const {data, deleteItem, checkedItem, element} = props;
    return(
        <li className="item">
            <p className={`${element.isDone ? 'checked' : ''}`}>{data}</p>
            <div className="item__buttons">
                <button
                    onClick={checkedItem}
                    className="item__checked-btn"
                    >✓</button>
                <button
                    onClick={deleteItem}
                    className="item__delete-btn">X</button>
            </div>
        </li>
    );
}

export default Item;
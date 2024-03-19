const ListItem = ({ data, onClickEdit, onClickDelete }) => {
    // Get the month name
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthName = monthNames[data.date.getMonth()];

    // Get the day and year
    const day = data.date.getDate();
    const year = data.date.getFullYear();
    const handleEditClick = () => {
        onClickEdit(data.id);
    };

    const handleDelete = () => {
        onClickDelete(data.id)
    }
    return <>
        <li className="item-list">
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <p>{`${monthName} ${day}, ${year}`}</p>
            <button onClick={handleEditClick} className="edit">Edit</button>
            <button onClick={handleDelete} className="delete">Delete</button>
        </li>
    </>
}

export default ListItem
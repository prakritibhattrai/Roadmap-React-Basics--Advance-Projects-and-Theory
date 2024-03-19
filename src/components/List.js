import ListItem from "./ListItem"
import { useList } from "./ListContext"
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const List = ({ lists }) => {
    const { deleteList } = useList();
    const navigate = useNavigate();
    const handleDelete = (listId) => {
        deleteList(listId);

    }
    const handleEdit = (listId) => {
        navigate(`/edit/${listId}`);
    };
    return <div className="all-lists">
        <ToastContainer />
        <ul>
            {lists ? lists.map((list, index) =>
                <ListItem data={list} key={list.id} onClickEdit={() => handleEdit(list.id)} onClickDelete={() => handleDelete(list.id)} />
            ) : ''}
        </ul>
    </div>

}
export default List
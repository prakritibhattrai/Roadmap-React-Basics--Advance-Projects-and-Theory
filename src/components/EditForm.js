import { useState } from "react";
import { useList } from "./ListContext";
import { useNavigate, useParams } from "react-router-dom";
import SearchFilter from "./Search";

const EditForm = () => {
    const { id } = useParams();
    const { editList, lists } = useList();
    const navigate = useNavigate();
    const item = lists.find(item => item.id === id);

    const [title, setTitle] = useState(item.title)
    const [description, setDescription] = useState(item.description);

    const handleSubmit = (e) => {
        e.preventDefault();
        editList({ ...item, title, description });
        navigate('/');
    };

    return (
        <div>
            <SearchFilter />
            <div className="list-form">
                <h2>Edit Item</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            value={title}
                            placeholder="Enter Title"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    );
}

export default EditForm
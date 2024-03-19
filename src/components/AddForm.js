import { useState } from "react";
import { useList } from "./ListContext";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchFilter from "./Search";

const AddForm = () => {

    const { addList, lists } = useList();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title)
        console.log(description)
        addList({ title, description });
        console.log(lists)
        toast.success('Case added successfully!', {
        });

    };

    return <div >
        <SearchFilter />
        <div className="list-form">
            <Link to={'/'}>CASE LIST PAGE</Link>

            <h3>ADD CASES</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    placeholder="Enter Case Title"
                    onChange={(e) => setTitle(e.target.value)}
                />

                <textarea
                    width='200px'
                    type="text"
                    placeholder="Enter Content"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} />


                <button type="submit" >Add Item</button>
            </form>
        </div>

        <ToastContainer />
    </div>
}

export default AddForm
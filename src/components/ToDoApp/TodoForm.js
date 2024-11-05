import { useState } from "react";

export const TodoForm = ({ addToDo }) => {
    const [newTodo, setNewTodo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTodo.trim() === "") return; // Avoid adding empty todos
        addToDo(newTodo.trim());
        setNewTodo(""); // Clear the input field after submission
    };

    return (
        <>
            <h3>Todo Form</h3>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                    type="text"
                    value={newTodo}
                    name="name"
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button type="submit">Add Todo</button>
            </form>
        </>
    );
};

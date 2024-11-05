import { useState } from "react";
import { TodoForm } from "./TodoForm";
import Todos from "./Todos";

/**
 * The main component for managing the Todo application.
 * 
 * This component handles the state of the todo lists, allowing users
 * to add, toggle, and delete todo items.
 * 
 * @returns {JSX.Element} The rendered TodoMain component.
 */
export const TodoMain = () => {

    const [todos, setTodos] = useState([
        { id: "1111", name: "list1", isComplete: false },
        { id: "222", name: "List2", isComplete: false }
    ]);

    /**
     * Adds a new todo item to the list.
     * 
     * @param {string} name - The name of the new todo item.
     */
    const addToDo = (name) => {
        setTodos([
            ...todos,
            { id: Date.now().toString(), name: name, isComplete: false }
        ]);
    };

    /**
     * Toogles completion status of todo item.
     * 
     * @param {string} id - The id of the todo item to toogle.
     */
    const toogleTodo = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
            )
        );
    };

    /**
     * Deletes todo item from the list.
     * 
     * @param {string} id - The id of the todo item to delete.
     */
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <>
            <TodoForm addToDo={addToDo} />
            <Todos todos={todos} toogleTodo={toogleTodo} deleteTodo={deleteTodo} />
        </>
    );

}
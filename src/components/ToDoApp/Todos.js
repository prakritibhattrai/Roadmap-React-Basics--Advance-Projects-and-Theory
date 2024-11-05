import TodoList from "./TodoList";

const Todos = ({ todos, toogleTodo, deleteTodo }) => {
    return (
        <ol>
            {todos && todos.map((todo) => (
                <TodoList
                    key={todo.id}
                    todo={todo}
                    toogleTodo={toogleTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </ol>
    );
};

export default Todos;

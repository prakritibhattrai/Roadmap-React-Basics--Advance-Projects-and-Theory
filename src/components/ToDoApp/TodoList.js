
const TodoList = ({ todo, toogleTodo, deleteTodo }) => {

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleToggle = () => {
    toogleTodo(todo.id);
  };

  return (
    <li>
      <div>
        <input
          type="checkbox"
          checked={todo.isComplete}
          onChange={handleToggle}
        />
        <span>{todo.isComplete ? <underline>{todo.name}</underline> : todo.name}</span>
        <span>
          <button onClick={handleDelete}>Delete</button>
        </span>
      </div>

    </li>
  );
};

export default TodoList;

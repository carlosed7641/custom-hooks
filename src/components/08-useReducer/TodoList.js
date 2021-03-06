import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, handleDelete, handleToggle }) => {
    return (
        <ul className='list-group list-group-flush'>
            {

                todos.map((todo, index) => (
                    <TodoListItem
                        key={todo.id}
                        todo={todo}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                        index={index}
                    />
                ))
            }
        </ul>
    );
}

export default TodoList;
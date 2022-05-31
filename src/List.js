import TodoForm from './TodoForm';
import SingleTodo from './SingleTodo';

export default function List ( {todos, handleSubmit, handleClickTodo, deleteTodo} ) {
    const handleClick = (e, id) => {
        handleClickTodo(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        }))
    }

    return (
        <div className='List'>
            <TodoForm handleSubmit={handleSubmit} />
            <ul className='todo-list'>
                {todos.map(todo =>
                    <SingleTodo
                        todo={todo}
                        handleClick={handleClick}
                        deleteTodo={deleteTodo}
                        key={todo.id}
                    /> 
                )}
            </ul>
        </div>
    )
}
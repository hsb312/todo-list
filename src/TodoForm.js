export default function TodoForm ( {handleSubmit} ) {
    const addNewTodo = (e, newTodo) => {
        e.preventDefault()
        handleSubmit(newTodo)
        e.target[0].value = ''
    }
    
    return (
        <form className="TodoForm" onSubmit={(e) => addNewTodo(e, e.target[0].value)}>
            <input type={"text"} />
            <button type="submit">추가</button>
        </form>
    )
}
import Todo from "./Todo"
import style from './../assets/css/todos.module.css'

const Todos = (props) =>{
    const handleRemoveTodo = (todo_id)=> props.onRemoveTodo(todo_id)
    
    return(
        <section className={style.todos}>
           {props.todos.map((todo)=><Todo todo={todo.newTodo} id={todo.id} key={todo.id} onRemoveTodo={handleRemoveTodo}/>)}
        </section>
    )
}
export default Todos
import style from './../assets/css/todo.module.css'
const Todo = (props) =>{
    const {title, desc} = props.todo
    const btnHandler = (id) => props.onRemoveTodo(id)
    
    return(
       <article className={style.todo}>
            <div>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
            <div>
                <button onClick={()=>btnHandler(props.id)} className={style.btn}>
                    <i className="fa fa-trash fa-2x"></i>
                </button>
            </div>
       </article>
    )
}
export default Todo
import { useState } from 'react'
import style from './../assets/css/newTodo.module.css'

const NewTodo = (props) =>{
    const [todo, setTodo] = useState({title:"", desc:""})

    const inputHadler = (property, value) =>{
        setTodo(prevObj=>({...prevObj, [property]:value}))
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        props.onChildData(todo)
        setTodo({title:"", desc:""})
       
    }
    return(
        <form className={style.form} onSubmit={handleSubmit}>
            <div className={style["form-field"]}>
                <label htmlFor="title">Title:</label>
                <input onChange={(e)=>inputHadler('title', e.target.value)} value={todo.title} type="text" name="title"/>
            </div>
            <div className={style["form-field"]}>
                <label htmlFor="desc">Description:</label>
                <textarea onChange={(e)=>inputHadler('desc', e.target.value)} value={todo.desc} type="text" name="desc"/>
            </div>
            <button type="submit">Add Todo</button>
        </form>
    )
}
export default NewTodo
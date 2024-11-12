import Todos from "./Todos"
import style from './../assets/css/home.module.css'
import NewTodo from "./NewTodo"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

const Home = () =>{
    const [todos, setTodo] = useState([])
    const newChildData = (newTodo) =>{
        setTodo(prevTodos=>[...prevTodos, {id:uuidv4(), newTodo}])
    }
    const handleRemoveTodo = (id) => setTodo(todos.filter((todos)=>todos.id != id))
    return(
        <div className={style.container}>
            <h1 style={{color:"white"}}>Todo App</h1>
            <NewTodo onChildData={newChildData}/>
            <Todos todos={todos} onRemoveTodo={handleRemoveTodo}/>
        </div>
    )
}
export default Home
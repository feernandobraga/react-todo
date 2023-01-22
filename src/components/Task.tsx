import styles from './Task.module.css'
import {Trash} from 'phosphor-react'
import {todo} from "../App";

interface ITaskProps {
	todo : todo
	onTaskComplete : (taskId : string) => void
	onDeleteTodo : (todoId : string) => void
}

export function Task({todo, onTaskComplete, onDeleteTodo} : ITaskProps){
	
	
	function handleOnTaskChanged(){
		onTaskComplete(todo.id)
	}
	
	function handleDeleteTodo(){
		onDeleteTodo(todo.id)
	}
	
	return(
		<div className={styles.wrapper}>
			<input type="checkbox" id={todo.content} name={todo.content} checked={todo.isCompleted} onChange={handleOnTaskChanged}/>
			<label htmlFor={todo.content}> {todo.content} </label>
			<Trash weight={"thin"} size={32} className={styles.trashIcon} onClick={handleDeleteTodo}/>
		</div>
	)
}
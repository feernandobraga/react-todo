import {PlusCircle} from 'phosphor-react'

import styles from './ActionBar.module.css'
import {ChangeEvent, FormEvent, useState} from "react";

interface IActionBarProps{
	onAddTodo: (task : string) => void
}

export function ActionBar({onAddTodo} : IActionBarProps){
	
	const [newTodo, setNewTodo] = useState('')
	
	
	function handleOnAddTask(event : FormEvent){
		event.preventDefault()
		
		onAddTodo(newTodo)
		setNewTodo('')
	}
	
	function handleOnInputChange(event : ChangeEvent<HTMLInputElement>){
		setNewTodo(event.target.value)
	}
	
	return(
		<div className={styles.actionBar}>
			
			<form className={styles.todoForm} onSubmit={handleOnAddTask}>
				
				<input onChange={handleOnInputChange} value={newTodo} type="text" name='todo' placeholder="Enter a new task..." required/>
				
				<button type="submit">
					Add <PlusCircle size={20}/>
				</button>
				
				
			
			</form>
			
		</div>
	);
	
}
import {ListChecks} from 'phosphor-react'

import styles from './EmptyList.module.css'


export function EmptyList(){
	return(
		<div className={styles.todoList} >
			<ListChecks size={64} weight={"thin"} className={styles.listIcon} />
			<p>Your todo list is empty</p>
			<p>Create a task to start organizing your list</p>
		</div>
	)
}
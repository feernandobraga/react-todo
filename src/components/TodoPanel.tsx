import styles from './TodoPanel.module.css'
import {EmptyList} from "./EmptyList";
import {Task} from "./Task";
import {todo} from "../App";

interface ITodoPanelProps {
	todoList: todo[]
	onDeleteTodo: (todoId:string) => void
	onCompleteTodo: (todoId : string) => void
}

export function TodoPanel({todoList, onDeleteTodo, onCompleteTodo} : ITodoPanelProps){
	
	const todoSize = todoList.length
	
	const completedTodoSize = todoList.filter((task) => {
		return task.isCompleted
	} ).length
	
	function handleOnTaskComplete(todoId : string){
		onCompleteTodo(todoId)
	}
	
	function deleteTodo(todoId : string){
		onDeleteTodo(todoId)
	}
	
	return(
		<div className={styles.wrapper}>
			
			<div className={styles.todoPanel}>
				<span className={styles.todoCreated}>Todos created
					<span className={styles.todoCounter}>{todoSize}</span>
				</span>
				<span className={styles.todoCompleted}>Completed
					<span className={styles.todoCounter}>{`${completedTodoSize} out of ${todoSize}`}</span>
				</span>
			</div>
			
			
			<div className={styles.todoList}>
				
				{todoList.length === 0
					? (<EmptyList/>)
					: (todoList.map((item) => {
						return (
							<Task
								key={item.id}
								todo={item}
								onTaskComplete={handleOnTaskComplete}
								onDeleteTodo={deleteTodo}/>)
					}))
				}
				
			</div>
			
			
		</div>
	)
}
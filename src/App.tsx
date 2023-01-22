import {Header} from "./components/Header";
import {ActionBar} from "./components/ActionBar";
import {TodoPanel} from "./components/TodoPanel";
import {useState} from "react";

import './global.css'
import styles from './App.module.css'

export interface todo{
	id: string,
	isCompleted: boolean,
	content: string
}


function App() {
	
	const [todos, setTodos] = useState<todo[]>([])
	
	function addTodo(newTodo : string){
		const todo = {
			id : Date.now().toString(),
			isCompleted : false,
			content : newTodo
		}
		const updatedTodoList = [...todos, todo]
		setTodos(updatedTodoList);
	}
	
	
	function deleteTodo(todoId : string){
		
		const updatedTodoList = todos.filter((todo) => {
			return todo.id !== todoId
		})
		
		setTodos(updatedTodoList)
	}
	
	function completeTodo(todoId : string){
		
		const updatedTodos = todos.map(todo => {
			if (todo.id === todoId) {
				return { ...todo, isCompleted : !todo.isCompleted};
			}
			return todo;
		});
		
		setTodos(updatedTodos);
		
	}
	
	return (
		<>
			<Header/>
			
			<div className={styles.wrapper}>
				
				<ActionBar onAddTodo={addTodo}/>
				
				<main>
					<TodoPanel todoList={todos} onDeleteTodo={deleteTodo} onCompleteTodo={completeTodo}/>
				</main>
				
			</div>
			
		</>
	)
}

export default App

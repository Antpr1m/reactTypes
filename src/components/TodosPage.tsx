import axios from "axios"
import { FC, useEffect, useState } from "react"
import { ITodo } from "../types/types"
import List from "./List"
import TodoItem from "./TodoItem"


const TodosPage: FC = () => {

	const [todos, setTodos] = useState<ITodo[]>([])  //? ТИПИЗАЦИЯ ХУКА

	useEffect(() => {
		fetchTodos()
	}, [])

	async function fetchTodos() {
		try {
			const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10') //? ТИПИЗАЦИЯ axios
			setTodos(response.data)
		} catch (e) {
			alert(e)
		}
	}

	return (
		<div>
			<List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />} />
		</div>
	)
}
export default TodosPage
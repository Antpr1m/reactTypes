import axios from "axios"
import { FC, useEffect, useState } from "react"
import { IUser } from "../types/types"
import List from "./List"
import UserItem from "./UserItem"
import { useNavigate } from "react-router-dom"

const UsersPage: FC = () => {

	const [users, setUsers] = useState<IUser[]>([])  //? ТИПИЗАЦИЯ ХУКА
	const navigate = useNavigate()

	useEffect(() => {
		fetchUsers()
	}, [])

	async function fetchUsers() {
		try {
			const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users') //? ТИПИЗАЦИЯ axios
			setUsers(response.data)
		} catch (e) {
			alert(e)
		}
	}

	return (
		<div>
			<List items={users} renderItem={(user: IUser) => <UserItem onClick={(user) => navigate('/users/' + user.id)} user={user} key={user.id} />} />
		</div>
	)
}
export default UsersPage
import Card, { CardVariant } from "./components/Cord";
import EventsExample from "./components/EventsExample";
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import UsersItemPage from "./components/UsersItemPage";
import TodoItemPage from "./components/TodoItemPage";

const App = () => {

	return (
		<BrowserRouter>
			<div>
				{/* <EventsExample />
				<Card onClick={(num) => console.log('click', num)} variant={CardVariant.primary} width='200px' height='200px'>
					<button>Кнопка</button>
				</Card> */}

				<div>
					<NavLink to={'/users'}>Пользователи</NavLink>
					<NavLink to={'/todos'}>Список дел</NavLink>
				</div>

				<Routes>
					<Route path={'/users'} element={<UsersPage />} />
					<Route path={'/users/:id'} element={<UsersItemPage />} />
					<Route path={'/todos'} element={<TodosPage />} />
					<Route path={'/todos/:id'} element={<TodoItemPage />} />
				</Routes>

			</div>
		</BrowserRouter>
	)
}

export default App;

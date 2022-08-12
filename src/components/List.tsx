import React from "react"


//*Универсальный компонент для отрисовки различных списков(пользователей, постов)

interface ListProps<T> {
	items: T[]                                 //массив элементов любого типа
	renderItem: (item: T) => React.ReactNode   //компонент который необходимо отрисовать
}

export default function List<T>(props: ListProps<T>) {  //Универсальный компонент для отрисовки различных списков(пользователей, постов)

	return (
		<div>
			{props.items.map(props.renderItem)}
		</div>
	)
}
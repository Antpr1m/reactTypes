import React, { useState } from "react";

export enum CardVariant {
	outlined = 'outlined',
	primary = 'primary'
}

interface CardProps {
	width?: string               //Если поставить ?, то параметр не обязательный
	height?: string
	variant: CardVariant
	children?: React.ReactNode   //children - это все, что помещается внутрь компоненты
	onClick: (num: number) => void          //Объявить ф-ию
}

const Card: React.FC<CardProps> = ({ width, height, children, variant, onClick }) => {
	const [state, setState] = useState(0)

	return (
		<div style={{
			width, height,
			border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
			background: variant === CardVariant.primary ? 'lightgrey' : ''
		}}
			onClick={() => onClick(state)}>
			{children}
		</div>
	)
}
export default Card
import React, { useState, useEffect } from 'react'

function MouseContainer() {
	const [x, setX] = useState(0)
	const [y, setY] = useState(0)

	const logMousePosition = e => {
		console.log('Mouse event')
		setX(e.clientX)
		setY(e.clientY)
	}

	/** Bad 😥
	 * O array de dependencia esta correto,
	 * entretanto não há uma clean Up function no useEffet
	 * para fazer o papel do método componentWillUnmount
	 * 
	 * O EventListener existirá no elemento window mesmo após
	 * este componente ser desmontado, o que pode ocasionar
	 * um memory leak na aplicação.
	 * 
	 * É mais comum isto ocorrer quando o frontend manda uma 
	 * request para o back, e "matamos" o componente antes
	 * de receber a response
	*/
	useEffect(() => {
		console.log('useFffect called')
		window.addEventListener('mousemove', logMousePosition)
	}, [])

	return (
		<div>
			X - {x} Y - {y}
		</div>
	)
}

export default MouseContainer
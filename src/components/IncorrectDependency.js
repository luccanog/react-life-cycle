import React, { useState, useEffect } from 'react'

function MouseContainer() {
	const [x, setX] = useState(0)
	const [y, setY] = useState(0)

	const logMousePosition = e => {
		console.log('Mouse event')
		setX(e.clientX)
		setY(e.clientY)
	}

	/** Marromeno 😑
	 * Não existe um array de dependencia, logo a função useEffect
	 * será executada a cada nova renderização.
	 * 
	 * toda vez que o mouse se move -> é setado um estado
	 * toda vez que é setado um estado -> o componente é re-renderizado
	 * toda vez que o componente é re-renderizado -> o useEffect abaixo será chamado
	 * 
	 * LOGO:
	 * toda vez que o mouse se move, o useEffect será chamado
	*/
	useEffect(() => {
		console.log('chamou useEffect')
		window.addEventListener('mousemove', logMousePosition)

		return () => {
			console.log('Component unmounting / cleanUp function')
			window.removeEventListener('mousemove', logMousePosition)
		}
	})

	return (
		<div>
			X - {x} Y - {y}
		</div>
	)
}

export default MouseContainer
import React, { useState, useEffect, useCallback } from 'react'

function MouseContainer() {
	const [x, setX] = useState(0)
	const [y, setY] = useState(0)

	const logMousePosition = useCallback((e) => {
		console.log('componentDidUpdate')
		setX(e.clientX)
		setY(e.clientY)
	}, [])

	/**  CORRETO 😀
		useEffect com array de dependencias imutavel -> semelhante ao componentDidMount
		useEffect com array de dependencias mutavel ->  semelhante ao componentDidUpdate
		cleanUp function ( return function ao final do hook) -> semelhante ao componentWillUnmount
	*/

	useEffect(() => {
		console.log('componentDidMount')
		window.addEventListener('mousemove', logMousePosition)

		return () => {
			console.log('componentWillUnmount') // cleanUp function
			window.removeEventListener('mousemove', logMousePosition)
		}
	}, [logMousePosition])

	return (
		<div>
			X - {x} Y - {y}
		</div>
	)
}

export default MouseContainer
import React, { useState } from 'react'
import MouseContainer from './components/MouseContainer'

function App() {
	const [display, setDisplay] = useState(true)
	return (
		<div>
			<button onClick={() => setDisplay(!display)}>TOGGLE</button>
			{display && <MouseContainer />}
		</div>
	)
}

export default App


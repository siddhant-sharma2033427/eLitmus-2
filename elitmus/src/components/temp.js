import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// Importing newly created components
import SecondComponent from './SecondComponent'
import FirstComponent from './FirstComponent'

function App () {
return (
	// BrowserRouter to wrap all
	// the other components
	<BrowserRouter>
	{/*switch used to render only the first
	route that matches the location rather
	than rendering all matching routes. */}
	<Routes>
		<Route exact path='/' element={<ul>
			<br />
			<li>
			{/* Link component uses the to prop
			to describe the location where the
			links should navigate to. */}
			<Link to='geeks/first' target='_blank'>
				Open First Component
			</Link>
			</li>
			<br />
			<li>
			<Link to='geeks/second' target='_blank'>
				Open Second Component
			</Link>
			</li>
		</ul>}>
		</Route>
		<Route exact path='/geeks/second' element={<SecondComponent />}></Route>
		<Route exact path='/geeks/first' element={<FirstComponent />}></Route>
	</Routes>
	</BrowserRouter>
)
}
export default App

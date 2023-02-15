import React from 'react'

export default function Footer({ list,setFilter }) {

	

	const filterChange = (e) => {
		setFilter(e)
	}
	
	return (
		<footer className="footer">
			<span className="todo-count">
				<strong>{list.length}</strong>
				items left
			</span>

			<ul className="filters">
				<li>
					<a href="#/" className="selected" onClick={() => filterChange('All')}>All</a>
				</li>
				<li>
					<a href="#/" onClick={() => filterChange(false)}>Active</a>
				</li>
				<li>
					<a href="#/" onClick={() => filterChange(true)} >Completed</a>
				</li>
			</ul>

			<button className="clear-completed">
				Clear completed
			</button>
		</footer>
	)
}


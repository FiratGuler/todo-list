import React, { useState } from 'react'

export default function Footer({ list,setFilter }) {

	

	const filterChangce = (e) => {
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
					<a href="#/" className="selected" onClick={() => filterChangce('All')}>All</a>
				</li>
				<li>
					<a href="#/" onClick={() => filterChangce(false)}>Active</a>
				</li>
				<li>
					<a href="#/" onClick={() => filterChangce(true)} >Completed</a>
				</li>
			</ul>

			<button className="clear-completed">
				Clear completed
			</button>
		</footer>
	)
}


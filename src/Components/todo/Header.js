import { useState } from 'react'

export default function Header({ list, setList }) {

  

    const [newList, setNewList] = useState([])
    const addNewList = (e) => {

        const counterId = list.length + 1 // Dizi uzunluğuna göre yeni bir id oluşturur. 
        setNewList({ ...newList, id: counterId, [e.target.name]: e.target.value, case: false })    
    }
    const onSubmit = (e) => {
        e.preventDefault();
        setList([...list, newList])
    }

    return (
        <header className='header' >
            <h1>Todo</h1>
            <form onSubmit={onSubmit}>
                <input onChange={addNewList} name='tittle' placeholder='What needs to be done?' className='new-todo'></input>
            </form>
        </header >
    )
}

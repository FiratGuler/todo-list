import React from 'react'

export default function List({ list, setList,filter }) {


    const DeleteListItem = () => {
        setList(list.filter((e) => e.id !== list.id))

    }

    const changeCase = (e) => {

        setList(list.map((lst) => {
            if (lst.id === e) {
                return {
                    ...lst,
                    case: !lst.case,
                };
            }
            return lst
        }))
    }
  
    return (
        <section className="main">
            <input className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">
                Mark all as complete
            </label>

            {
                filter === 'All'
                    ? list.map((list) => (

                        <ul className="todo-list" key={list.id}>

                            <li className={list.case ? "completed" : ""}>
                                <div className="view">
                                    <input className="toggle" type="checkbox" onClick={() => changeCase(list.id)} />
                                    <label>{list.tittle}</label>
                                    <button className="destroy" onClick={DeleteListItem}></button>
                                </div>
                            </li>
                        </ul>
                    ))
                    : list.filter(con => con.case === filter).map((list) => (
                        <ul className="todo-list" key={list.id}>

                            <li className={list.case ? "completed" : ""}>
                                <div className="view">
                                    <input className="toggle" type="checkbox" onClick={() => changeCase(list.id)} />
                                    <label>{list.tittle}</label>
                                    <button className="destroy" onClick={DeleteListItem}></button>
                                </div>
                            </li>
                        </ul>
                    ))


            }
        </section>

    )
}



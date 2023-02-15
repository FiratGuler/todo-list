import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header'
import List from './List';


export default function Index() {

  const [list, setList] = useState([
    {
      id: 1,
      tittle: "React",
      case: true
    },
    {
      id: 2,
      tittle: "Work",
      case: false
    }
  ]);
  const [filter, setFilter] = useState('All')


  return (

    <section className="todoapp">
      <Header list={list} setList={setList} />
      <List list={list} setList={setList} filter={filter} />
      <Footer list={list} setFilter={setFilter} />
    </section>
  )
}

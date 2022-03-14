import React, { useState } from 'react'

const Whislist = () => {
    const [query, setQuery] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleChange = (e) => {
        const {value} = e.target;
        setQuery(value);
    }

    const addTodo = () => {
        const payload = {
            todo: query,
            status: false,
        }

        let updatedTasks = [...tasks, payload]

        setTasks(updatedTasks)
        setQuery("");
    }

    if(tasks.length>3){
        return <>
            <h1>WhisList</h1>
            <p>You cannot add more than 3 items to wishlist.</p>
        </>
    }
  return (
    <>
        <h1>WhisList</h1>
        <input placeholder="Add Items" value={query} onChange={handleChange}/>
        <button onClick={addTodo}>ADD</button>
        {
            tasks.map(({ todo, status }, idx) => (
                <div key={ idx }>{todo}</div>
            ))
        }
    </>
  )
}

export default Whislist
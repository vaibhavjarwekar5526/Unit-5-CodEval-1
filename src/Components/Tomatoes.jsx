import React, { useState } from 'react'

const Tomatoes = () => {
    const [tomatoes, setTomatoes] = useState(10);


    const changeCount = (val) => {
        setTomatoes(tomatoes+val)
    }
  return (
    <>
        <div>{`Tomatoes:${tomatoes} Kgs`}</div>
        <div>
            <button onClick={() => changeCount(+1)}>+</button>
            <button onClick={() => changeCount(-1)}>-</button>
        </div>
    </>
  )
}

export { Tomatoes }
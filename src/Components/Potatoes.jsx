import React, { useState } from 'react'

const Potatoes = () => {
    const [potatoes, setPotatoes] = useState(8);


    const changeCount = (val) => {
        setPotatoes(potatoes+val)
    }
  return (
    <>
        <div>{`Potatoes:${potatoes} Kgs`}</div>
        <div>
            <button onClick={() => changeCount(+1)}>+</button>
            <button onClick={() => changeCount(-1)}>-</button>
        </div>
    </>
  )
}

export { Potatoes }
import React, { useState } from 'react'

const Onions = () => {
    const [onions, setOnions] = useState(7);


    const changeCount = (val) => {
        setOnions(onions+val)
    }
  return (
    <>
        <div>{`Onions:${onions} Kgs`}</div>
        <div>
            <button onClick={() => changeCount(+1)}>+</button>
            <button onClick={() => changeCount(-1)}>-</button>
        </div>
    </>
  )
}

export { Onions }
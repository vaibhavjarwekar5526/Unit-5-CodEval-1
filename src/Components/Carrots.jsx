import React, { useState } from 'react'

const Carrots = () => {
    const [carrots, setCarrots] = useState(5);


    const changeCount = (val) => {
        setCarrots(carrots+val)
    }
  return (
    <>
        <div>{`Carrots:${carrots} Kgs`}</div>
        <div>
            <button onClick={() => changeCount(+1)}>+</button>
            <button onClick={() => changeCount(-1)}>-</button>
        </div>
    </>
  )
}

export { Carrots }
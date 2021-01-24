import React, { useState } from 'react'

export const RowCounter = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClicked = (numClicks) => {
    setClickCount(clickCount + numClicks)
  };


  return (
    <section className="counter-container">
      <button onClick={() => handleClicked(1)}>+1</button>
      <button onClick={() => handleClicked(-1)}>-1</button>
      <p className="counter-total">Knitted rows: {clickCount}</p>
      {clickCount > 9 ? <p>Yay! You getting there</p> : <></>}
    </section>
  )
}
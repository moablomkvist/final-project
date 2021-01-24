import React, { useState } from 'react'

export const RowCounter = () => {
  const [clickCount, setClickCount] = useState(0);

  const onClicked = (numClicks) => {
    setClickCount(clickCount + numClicks)
  };

  return (
    <section className="counter-container">
      <button className="counter-button" onClick={() => onClicked(1)}>+ 1</button>
      <button className="counter-button" onClick={() => onClicked(-1)}>- 1</button>
      <p className="counter-total">KNITTED ROWS: {clickCount}</p>
      {clickCount > 9 ? <p>Yay! You're getting there</p> : <></>}
    </section>
  )
}
import React, { useState } from 'react'
import styled from 'styled-components'

const CounterContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #a4a99b;
  //background-color: #83AF9B;
`

const CounterButton = styled.button`
  width: 25%;
  margin: 10px;
  padding: 2%;
  background: #cba892;
  //background-color: #83AF9B;
  border: solid 2px;
  font-size: 20px;
  font-family: 'Fraunces', serif;
  cursor: pointer;

  &:hover {
    border: dashed 2px;
  }
`

const CounterText = styled.p`
  font-family: 'Fraunces', serif;
  font-size: 20px;
  font-weight: 700;

  &.progressionText {
    font-size: 18px;
    font-weight: 400;
  }
`

export const RowCounter = () => {
  const [clickCount, setClickCount] = useState(0);

  const onClicked = (numClicks) => {
    setClickCount(clickCount + numClicks)
    // add something that updates the local storage (om man har fyllt i ett värde -> då visas antal varv. Om inte -> då visas 0)
  };

  return (
    <CounterContainer>
      <CounterButton onClick={() => onClicked(1)}>+ 1</CounterButton>
      <CounterButton onClick={() => onClicked(-1)}>- 1</CounterButton>
      <CounterText>KNITTED ROWS: {clickCount}</CounterText>
      {clickCount > 9 ? <CounterText className='progressionText'>Yay! You're getting there.</CounterText> : <></>}
    </CounterContainer>
  )
}
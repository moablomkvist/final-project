import React, { useEffect, useState } from 'react'
import styled from 'styled-components'


const useStickyState = (defaultValue, key) => {
  const [value, setValue] = useState(() => {
    const stickyValue = localStorage.getItem(key);
    return stickyValue !== null
      ? JSON.parse(stickyValue)
      : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};

export const RowCounter = () => {
  const [clickCount, setClickCount] = useStickyState(0, 'count');

  return (
    <CounterContainer>
      <CounterHeading>Start counting rows</CounterHeading>
      <CounterButton onClick={() => setClickCount(clickCount + 1)}>+ 1</CounterButton>
      <CounterButton onClick={() => setClickCount(clickCount - 1)}>- 1</CounterButton>
      <CounterText>KNITTED ROWS: {clickCount}</CounterText>
      {clickCount > 9 ? <CounterText className='progressionText'>Yay! Knit or die.</CounterText> : <></>}
    </CounterContainer>
  )
}

const CounterContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  background: #a4a99b;
  //background-color: #83AF9B;
  font-family: 'Fraunces', serif;
`

const CounterHeading = styled.h1`
  font-size: 40px;
  font-weight: 400;
`

const CounterButton = styled.button`
  width: 25%;
  margin: 10px;
  padding: 2%;
  background: #cba892;
  //background-color: #83AF9B;
  border: solid 2px;
  font-size: 20px;

  cursor: pointer;

  &:hover {
    border: dashed 2px;
  }
`

const CounterText = styled.p`
  font-size: 20px;
  font-weight: 700;

  &.progressionText {
    font-size: 18px;
    font-weight: 400;
  }
`
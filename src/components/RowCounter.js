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
    <SectionContainer>
      <CounterContainer>
        <CounterHeading>Row Counter:</CounterHeading>
        <CounterButton onClick={() => setClickCount(clickCount + 1)}>+</CounterButton>
        <CounterText>{clickCount} st</CounterText>
        <CounterButton onClick={() => setClickCount(clickCount - 1)}>-</CounterButton>
        {clickCount > 9 ? <CounterText className='progressionText'>Yay! Knit or die.</CounterText> : <></>}
      </CounterContainer>
    </SectionContainer>
  )
}

const SectionContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  background: #a4a99b;
`

const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px;
  background: #a4a99b;
  //background-color: #83AF9B;
  font-family: 'Fraunces', serif;
`

const CounterHeading = styled.h1`
  font-size: 30px;
  font-weight: 400;
`

const CounterButton = styled.button`
  width: 65px;
  height: 65px;
  margin: 10px;
  padding: 2%;
  border-radius: 50%;
  background: #cba892;
  //background-color: #83AF9B;
  border: solid 1px;
  font-size: 30px;
  cursor: pointer;

  &:hover, &:focus {
    border: dashed 2px;
  }
`

const CounterText = styled.p`
  font-size: 30px;
  font-weight: 700;

  &.progressionText {
    font-size: 18px;
    font-weight: 400;
  }
`
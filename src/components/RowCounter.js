import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Container } from 'styling/lib/Card'

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
        <Container className="row-counter">
        <CounterHeading>Row Counter</CounterHeading>
        <CounterButton onClick={() => setClickCount(clickCount + 1)}>+</CounterButton>
        <CounterText>{clickCount} st</CounterText>
        <CounterButton onClick={() => setClickCount(clickCount - 1)}>-</CounterButton>
        {clickCount > 9 ?
          <CounterText className='progression-text'>Yay! Knit or die.</CounterText> 
        : <></>}
        </Container>
    </SectionContainer>
  )
}

const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #a4a99b;
`

const CounterHeading = styled.h1`
  font-size: 16px;
  font-weight: 400;
`

const CounterButton = styled.button`
  width: 65px;
  height: 65px;
  margin: 10px;
  padding: 1%;
  border-radius: 50%;
  background: #cba892;
  border: none;
  font-size: 32px;
  cursor: pointer;

  &:hover, &:focus {
    border: dashed 2px;
  }
`

const CounterText = styled.p`
  font-size: 36px;
  font-weight: 700;
  margin: 0;

  &.progression-text {
    font-size: 16px;
    font-weight: 400;
    margin: 16px;
  }
`
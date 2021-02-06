import React from 'react'
import styled from 'styled-components'


export const PostPattern = () => {

  return (
    <PostingForm>
      <h1>Spread some knitting</h1>
      <TextfieldsContainer>
        <label>Post pattern</label>
        <input 
          type="text" 
          placeholder="Post a URL"
          required
        ></input>

        <label>Give a short reason why to knit it</label>
        <input type="text"></input>

        <label>What yarn did you use?</label>
        <input type="text"></input>

        <label>What size of needles?</label>
        <input type="text"></input>
      </TextfieldsContainer>

      <RadioButtonContainer>
        <label>How suitable for a beginner?</label>
        <input type="radio"></input>
        <input type="radio"></input>
        <input type="radio"></input>
        <input type="radio"></input>
        <input type="radio"></input>
      </RadioButtonContainer>

      <button type='submit'>Share pattern</button>

  </PostingForm>
  )
}

const PostingForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #a4a99b;
  font-family: 'Fraunces';
`
const TextfieldsContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 10px;
`
const RadioButtonContainer = styled.section`
  display: flex;
  flex-direction: row;
  margin: 40px;
`


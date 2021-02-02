import React from 'react'
//import { ReactTinyLink } from 'react-tiny-link'
import styled from 'styled-components'

export const UserLoginSignup = () => {

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
  <section>
    <Form>
      <label>Sign up</label>
      <textarea
      >
      </textarea>
      <label>Lösenord</label>
      <textarea
      >
      </textarea>
      <button type='submit' onClick={handleSubmit}>Sign up</button>
    </Form>
  </section>

  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
`




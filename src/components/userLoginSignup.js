import React, { useState } from 'react'
import { ReactTinyLink } from 'react-tiny-link'
import styled from 'styled-components'

export const userLoginSignup = () => {

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
  
  <section>
    <Form>
      <label>Dela ditt tips på nybörjarmönster</label>
      <textarea
      >
      </textarea>
      <label>Länk</label>
      <textarea
      >
      </textarea>
      <button type='submit' onClick={handleSubmit}>Dela</button>
    </Form>
  </section>

  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
`




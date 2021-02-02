import React, { useState } from 'react'
//import { ReactTinyLink } from 'react-tiny-link'
import styled from 'styled-components'

const LOGIN_URL = 'http://localhost:8080/sessions'
const SIGNUP_URL = 'http://localhost:8080/users'
const PATTERNS_URL = 'http://localhost:8080/patterns'

export const UserLoginSignup = () => {
  const [ name, setNames ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ loginPage, setLoginPage ] = useState(false)
  const [ patterns, setPatterns ] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const loginUser = (event) => {
    event.preventDefault();
    fetch(LOGIN_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, password }),
    })
    .then(res => res.json())
    .then(json => {
      handlePatterns(json.accessToken)
      //setStatus(json.message)
    })
    .catch(err => console.log('error:', err))
  }

  const handlePatterns = (accessToken) => {
    fetch(PATTERNS_URL, {
      method: 'GET',
      headers: { Authorization: accessToken }
    })
      .then(res => res.json())
      .then(json => {
        setPatterns(json.savedPattern)
      })
      .catch(err => {console.log('error:', err)
    })
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
      <button onClick={() => setLoginPage(true)}>Logga in</button>
    </Form>
  </section>

  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
`




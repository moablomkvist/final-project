import React, { useState } from 'react'
//import { ReactTinyLink } from 'react-tiny-link'
import styled from 'styled-components'

const LOGIN_URL = 'http://localhost:8080/sessions'
const SIGNUP_URL = 'http://localhost:8080/users'
const PATTERNS_URL = 'http://localhost:8080/patterns'

export const UserLoginSignup = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [loginPage, setLoginPage] = useState(false)
  const [patterns, setPatterns] = useState('') //the page the user gets when logged in
  const [status, setStatus] = useState('')

  const handleSignup = (event) => {
    event.preventDefault();
    fetch(SIGNUP_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, password }),
    })
    //.then(res => res.json())
      .then(json => {
        handlePatterns(json.accessToken)
      })
      .catch(err => console.log('error:', err))
      .finally(() => {
        setName("");
        setPassword("");
      })
  }

  const handleLogin = (event) => {
    event.preventDefault();
    fetch(LOGIN_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, password }),
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Please try again!");
      } else {
        return res.json();
      }
    })
    .then(json => {
      handlePatterns(json.accessToken)
      setStatus(json.message)
    })
    .catch(err => console.log('error:', err))
    .finally(() => {
      setName("")
      setPassword("")
    })
  }

  const handlePatterns = (accessToken) => {
    fetch(PATTERNS_URL, {
      method: 'GET',
      headers: { Authorization: accessToken }
    })
      .then(res => res.json())
      .then(json => {
        setPatterns(json.patterns) //or (setPatterns=true)
      })
      .catch(err => {console.log('error:', err)
    })
  }

  return (
    <>
    <section>
      {!loginPage && (
        <>
        <Form onSubmit={handleSignup}>
          <label>Create username</label>
          <textarea
            required
            minLength='3'
            placeholder='Minimum 3 letters'
            value={name}
            onChange={(event) => setName(event.target.value)}
          >
          </textarea>
          <label>Password</label>
          <textarea
            type='password'
            name='password'
            required
            minLength='5'
            placeholder='Minimum 5 letters'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          >
          </textarea>
          <button 
          type='submit'>
          Sign up
          </button>
        </Form>
          <button 
            onClick={() => setLoginPage(true)}
          >
            Already have an account?
          </button>
        </>
      )}
    </section>

    {loginPage && 
      (
      <Form onSubmit={handleLogin}>
        <label>
          Name
        </label>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          minLength="3"
        />
        <label>
          Password
        </label>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          minLength="5"
          />
        <button 
          type='submit'
          onClick={() => setPatterns(true)}
        >
          Log in
        </button>
      </Form>
    )}

    {patterns && 
      !loginPage && (
        <p>Look at all this patterns!</p>
      )
    }
    </>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
`




import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'

import { userReducer} from '../reducers/userReducer'
import { LandingPage } from 'pages/LandingPage';

const LOGIN_URL = 'http://localhost:8081/sessions'
const SIGNUP_URL = 'http://localhost:8081/users'

export const LoginSignup = () => {
  const dispatch = useDispatch()
  const accessToken = useSelector((store) => store.userReducer.login.accessToken)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const [loginPage, setLoginPage] = useState(false)


  const handleLoginSuccess = (loginResponse) => {
    dispatch(
      userReducer.actions.setAccessToken({ accessToken: loginResponse.accessToken })
    );
    dispatch(userReducer.actions.setUserId({ userId: loginResponse.userId }));
    dispatch(userReducer.actions.setStatusMessage({ statusMessage: "Logged in" }));
  }

  const handleLoginFailed = (loginError) => {
    dispatch(userReducer.actions.setAccessToken({ accessToken: null }));
    dispatch(userReducer.actions.setStatusMessage({ statusMessage: loginError }));
  };

  //Signup
  const handleSignup = (event) => {
    event.preventDefault();

    fetch(SIGNUP_URL, {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Could not create user')
        }
        return res.json()
      })
      .then((json) => handleLoginSuccess(json))
      .catch((err) => handleLoginFailed(err))
  };

  //Login
  const handleLogin = (event) => {
    event.preventDefault();

    fetch(LOGIN_URL, {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            'Unable to log in. Please check that your username and password is correct'
          )
        }
        return res.json()
      })
      .then((json) => handleLoginSuccess(json))
      .catch((err) => handleLoginFailed(err));
  };

  //Istället för att skriva det såhär så använder vi useEffect som triggar useHistory till sidan för /landingpage om accesToken är en string, annars är acesstoken null. Allt ska ske i Startpage med browserrouter.
  if (accessToken) {
    return <><LandingPage /></>;
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
        >
          Log in
        </button>
      </Form>
    )}
    </>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

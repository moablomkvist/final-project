import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'

import { userReducer} from '../reducers/userReducer'
import { Button } from 'styling/lib/Button';


const LOGIN_URL = 'http://localhost:8081/sessions'
const SIGNUP_URL = 'http://localhost:8081/users'

export const LoginSignup = () => {
  const dispatch = useDispatch()
  useSelector((store) => store.userReducer.login.accessToken)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [loginPage, setLoginPage] = useState(false)

  const handleLoginSuccess = (loginResponse) => {
    dispatch(userReducer.actions.setAccessToken({ accessToken: loginResponse.accessToken }));
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

 // If user is logged out, show login form
  return (
    <>
      {!loginPage && (
        <>
        <MembersButton onClick={() => setLoginPage(true)}>
          Already a member?
        </MembersButton>
        <AuthContainer>
        <h2>Become a member</h2>
        <Form onSubmit={handleSignup}>
          <label>Username</label>
          <Input
            required
            minLength='3'
            placeholder='Min 3 letters'
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <label>Password</label>
          <Input
            type="password"
            name="password"
            required
            minLength='5'
            placeholder='Min 5 letters'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button 
          type='submit'>
          Join the circle
          </Button>
        </Form>
        </AuthContainer>
        </>
      )}
    
    
    {loginPage && 
      (
      <Form onSubmit={handleLogin}>
        <label>
          Name
        </label>
        <Input
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          minLength="3"
        />
        <label>
          Password
        </label>
        <Input
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
          minLength="5"
          />
        <Button type='submit'>
          Login
        </Button>
      </Form>
    )}
    </>
  );

}

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 8px;
  width:100%;
  margin-top: 5px;
  margin-bottom: 5px;
  border: 0;
  opacity: 0.3;
  box-shadow: 0 0 15px 5px rgba(0,0,0,0.07);
  font-family: inherit;
  
  &:hover {
    box-shadow:0 0 4px rgba(0,0,0,0.12);
    opacity: 0.5;
  }
`;

const AuthContainer = styled.section`
  box-shadow: 0px 5px 1px -1px rgba(0, 0, 0, 0.2),
  0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  background-color: #83979d;
  border-radius: 6px;
  margin: 20px;
  padding: 20px;
`;

const MembersButton = styled.button`
background-color: #5E6572;
border: none;
color: #fff;
font-family: 'Josefin Slab', serif;
padding: 10px;
width: 40%;
text-align: center;
transition-duration: 0.4s;
overflow: hidden;
box-shadow: 0 2px 10px #949899;
border-radius: 4px;

&:hover {
  background: #a88979;
  box-shadow: 0px 2px 10px 5px #949899;
}
`

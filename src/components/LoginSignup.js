import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { userReducer } from "../reducers/userReducer";

import { Button } from "styling/lib/Button";

export const LoginSignup = () => {
  const dispatch = useDispatch();
  useSelector((store) => store.userReducer.login.accessToken);
  const statusMessage = useSelector((store) => store.userReducer.login.statusMessage)
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loginPage, setLoginPage] = useState(false);

  const LOGIN_URL = "https://knitting-circle.herokuapp.com/sessions";
  const SIGNUP_URL = "https://knitting-circle.herokuapp.com/users";

  const handleLoginSuccess = (loginResponse) => {
    dispatch(userReducer.actions.setAccessToken({ accessToken: loginResponse.accessToken }));
    dispatch(userReducer.actions.setUserId({ userId: loginResponse.userId }));
    dispatch(userReducer.actions.setStatusMessage({ statusMessage: "Welcome!" }));
  };

  const handleLoginFailed = () => {
    dispatch(userReducer.actions.setAccessToken({ accessToken: null }));
    dispatch(userReducer.actions.setStatusMessage({ statusMessage: "Please try with another username or password." }));
  };

  //Signup
  const handleSignup = (event) => {
    event.preventDefault();

    fetch(SIGNUP_URL, {
      method: "POST",
      body: JSON.stringify({ name, password }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not create user");
        }
        return res.json();
      })
      .then((json) => handleLoginSuccess(json))
      .catch((err) => handleLoginFailed(statusMessage));
  };

  //Login
  const handleLogin = (event) => {
    event.preventDefault();

    fetch(LOGIN_URL, {
      method: "POST",
      body: JSON.stringify({ name, password }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            "Unable to log in. Please check that your username and password is correct."
          );
        }
        return res.json();
      })
      .then((json) => handleLoginSuccess(json))
      .catch((err) => handleLoginFailed(statusMessage));
  };

  // If user is logged out, show login form
  return (
    <>
      {!loginPage && (
        <SignupLoginWrapper>
          <AuthContainer className="member-card">
          <SignupHeader>Circle member</SignupHeader>
          <p>Do we know you from before? Just log in and start exploring.</p>
          <Button className="members-button" onClick={() => setLoginPage(true)}>
            Part of the circle
          </Button>
          </AuthContainer>
          <AuthContainer>
            <SignupHeader>Become a member</SignupHeader>
            <Form onSubmit={handleSignup}>
              <label>Username</label>
              <Input
                required
                minLength="3"
                placeholder="Min 3 letters"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <label>Password</label>
              <Input
                type="password"
                name="password"
                required
                minLength="5"
                placeholder="Min 5 letters"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <Button type="submit">Join the circle</Button>
              <StatusMessage>{statusMessage}</StatusMessage>
            </Form>
          </AuthContainer>
          </SignupLoginWrapper>

      )}

      {loginPage && (
        <Form onSubmit={handleLogin} className="login-page">
          <label>Name</label>
          <Input
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            minLength="3"
          />
          <label>Password</label>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            minLength="5"
          />
          <Button className="login-button" type="submit">Log in</Button>
          <StatusMessage>{statusMessage}</StatusMessage>
        </Form>
      )}
    </>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const SignupHeader = styled.h2 `
  margin-bottom: 40px;

  @media (min-width: 768px) {
    font-size: 40px;
  }
`

const Input = styled.input`
  padding: 8px;
  width: 100%;
  margin: 5px 0 20px 0;
  border: 0;
  opacity: 0.3;
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.07);
  font-family: inherit;

  &:hover {
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.12);
    opacity: 0.5;
  }

  @media (min-width: 768px) {
    padding: 12px;
  }
`;

const SignupLoginWrapper = styled.section`
  display: flex;
  flex-direction: column;
`

const AuthContainer = styled.section`
  box-shadow: 0px 5px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  background-color: #83979d;
  border-radius: 6px;
  margin: 20px;
  padding: 20px;

  &.member-card {
    background-color: #a4a99b;
  }
`;

const StatusMessage = styled.p`
  color: white;
  margin: 5px 0 15px 0;
  font-size: 14px;
  width: 70%;
`

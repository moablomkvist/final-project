import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { userReducer } from "../reducers/userReducer";

import { Button } from "styling/lib/Button";

export const LoginSignup = () => {
  const dispatch = useDispatch();
  useSelector((store) => store.userReducer.login.accessToken);
  const statusMessage = useSelector((store) => store.userReducer.login.statusMessage);
  
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loginPage, setLoginPage] = useState(false);

  const LOGIN_URL = "https://knitting-circle.herokuapp.com/sessions";
  const SIGNUP_URL = "https://knitting-circle.herokuapp.com/users";

  const handleLoginSuccess = (loginResponse) => {
    dispatch(userReducer.actions.setAccessToken({
        accessToken: loginResponse.accessToken,
      })
    );
    dispatch(userReducer.actions.setUserId({ userId: loginResponse.userId }));
    dispatch(
      userReducer.actions.setStatusMessage({ statusMessage: "Välkommen!" })
    );
  };

  const handleLoginFailed = () => {
    dispatch(userReducer.actions.setAccessToken({ accessToken: null }));
    dispatch(
      userReducer.actions.setStatusMessage({
        statusMessage: "Försök med ett annat användarnamn eller lösenord.",
      })
    );
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
          throw new Error("Kunde inte skapa användare.");
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
            "Det gick inte att logga in. Se över ditt användarnamn och lösenord är du snäll."
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
            <SignupHeader>Redan en del av juntan?</SignupHeader>
            <p>Logga bara in och börja upptäck.</p>
            <Button
              className="members-button"
              onClick={() => setLoginPage(true)}
            >
              Logga in
            </Button>
          </AuthContainer>
          <AuthContainer>
            <SignupHeader>Bli en av alla oss stickare</SignupHeader>
            <Form onSubmit={handleSignup}>
              <label>Användarnamn</label>
              <Input
                required
                minLength="3"
                placeholder="Min 3 letters"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <label>Lösenord</label>
              <Input
                type="password"
                name="password"
                required
                minLength="5"
                placeholder="Min 5 letters"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <Button type="submit">Bli en av oss!</Button>
              <StatusMessage>{statusMessage}</StatusMessage>
            </Form>
          </AuthContainer>
        </SignupLoginWrapper>
      )}

      {loginPage && (
        <Form onSubmit={handleLogin} className="login-page">
          <label>Användarnamn</label>
          <Input
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            minLength="3"
          />
          <label>Lösenord</label>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            minLength="5"
          />
          <Button className="login-button" type="submit">
            Logga in
          </Button>
          <StatusMessage>{statusMessage}</StatusMessage>
        </Form>
      )}
    </>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;

  &.login-page {
    width: 60%;
    
    @media (min-width: 667px) {
      width: 40%;
    }
    @media (min-width: 1025px) {
      width: 20%;
    }
  }

  @media (min-width: 667px) {
    width: 60%;
  }
`;

const SignupHeader = styled.h2`
  margin-bottom: 40px;

  @media (min-width: 667px) {
    font-size: 40px;
  }
`;

const Input = styled.input`
  margin: 5px 0 20px 0;
  padding: 8px;
  width: 100%;
  border: 0;
  opacity: 0.3;
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.07);
  font-family: inherit;

  &:hover {
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.12);
    opacity: 0.5;
  }
`;

const SignupLoginWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const AuthContainer = styled.section`
  margin: 20px;
  padding: 20px;
  box-shadow: 0px 5px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  background: #767a6e;
  border-radius: 6px;

  &.member-card {
    background: #d1b8ab;
  }
`;

const StatusMessage = styled.p`
  margin: 5px 0 15px 0;
  width: 70%;
  font-size: 14px;
  color: white;
`;

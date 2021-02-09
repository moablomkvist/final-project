import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import moment from "moment";
import styled from "styled-components";

import { patternReducer } from "../reducers/patternReducer";

import { Button } from "../styling/lib/Button"

export const HandlePattern = () => {
  const dispatch = useDispatch(); //store all the patterns
  const patterns = useSelector((store) => store.patternReducer.all);
  const accessToken = useSelector(
    (store) => store.userReducer.login.accessToken
  );

  const PATTERNS_URL = "http://localhost:8081/patterns";

  let history = useHistory();
  const handleDeleteSuccess = () => {
    history.go();
  };

  useEffect(() => {
    fetch(PATTERNS_URL, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not find your account.");
        } else {
          return res.json();
        }
      })
      .then((json) => dispatch(patternReducer.actions.setPatterns(json)));
    //how to store the patterns in Redux store.
  }, [dispatch]); //for not continuously updating. Gets depending on this variable.

  const handleDeletePattern = (_id) => {
    fetch(`http://localhost:8081/patterns/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not delete pattern");
        }
        return console.log("deleted");
      })
      .then((json) => handleDeleteSuccess(json))
      .catch((err) => console.log("error:", err));
  };

  return (
    <section>
      {patterns.map((pattern) => (
        <PatternCard key={pattern._id}>
          <PatternName>{pattern.post}</PatternName>
          <a href={pattern.source} alt="pattern description">
            <PatternImage src={pattern.imageSource} alt="pattern image" />
          </a>
          <PatternDetails>{pattern.yarn}</PatternDetails>
          <PatternDetails>{pattern.needles}</PatternDetails>
          <PatternDetails>{moment(pattern.createdAt).fromNow()}</PatternDetails>
          <Button onClick={() => {handleDeletePattern(pattern._id);}}>Delete</Button>
        </PatternCard>
      ))}
    </section>
  );
};

export const PatternCard = styled.article`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 20px;

  @media (min-width: 768px) {
    width: 25%;
  }
`;

export const PatternName = styled.h3`
  margin: 10px;
  font-size: 24px;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

export const PatternImage = styled.img`
  width: 100%;
`;

export const PatternDetails = styled.p`
  margin: 10px;
  font-size: 18px;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { Button } from "styling/lib/Button";
import { Form, Input, Container } from "styling/lib/Card";
import { useHistory } from "react-router-dom";

export const PostPattern = () => {
  const [post, setPost] = useState("");
  const [source, setSource] = useState("");
  const [imageSource, setImageSource] = useState("");
  const [needles, setNeedles] = useState("");
  const [yarn, setYarn] = useState("");

  const accessToken = useSelector(
    (store) => store.userReducer.login.accessToken
  );

  const PATTERNS_URL = "https://knitting-circle.herokuapp.com/patterns";

  let history = useHistory();
  const handlePostSuccess = () => {
    history.push("/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(PATTERNS_URL, {
      method: "POST",
      body: JSON.stringify({ post, source, imageSource, needles, yarn }),
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Could not create a pattern");
        }
        return res.json();
      })
      .then((json) => handlePostSuccess(json))
      .catch((err) => console.log("error:", err));
  };

  return (
    <PostpageContainer>
      <CoverPhoto
        src="assets/knitting-circle-cover.jpg"
        alt="knitting-model"
      ></CoverPhoto>
      <Form className="post-form" onSubmit={handleSubmit}>
        <Container className="post-container">
          <PostHeading>Share pattern with the circle</PostHeading>

          <label>Name of the pattern</label>
          <Input
            className="post-input"
            type="text"
            value={post}
            onChange={(event) => setPost(event.target.value)}
          />

          <label>Add pattern link</label>
          <Input
            className="post-input"
            type="text"
            value={source}
            onChange={(event) => setSource(event.target.value)}
            placeholder="Link address (url)"
            required
          />
          <label>Add image link</label>
          <Input
            className="post-input"
            type="text"
            value={imageSource}
            onChange={(event) => setImageSource(event.target.value)}
            placeholder="Image address (url)" 
            required
          />

          <label>Name of the used yarn</label>
          <Input
            className="post-input"
            type="text"
            value={yarn}
            onChange={(event) => setYarn(event.target.value)}
          />

          <label>Sizes of used needles</label>
          <Input
            className="post-input"
            type="text"
            value={needles}
            onChange={(event) => setNeedles(event.target.value)}
            placeholder="Ex. Sock needles, 3,5 mm"
          />
        </Container>
        <Button className="share-button" type="submit">
          Share pattern
        </Button>
      </Form>
    </PostpageContainer>
  );
};

const PostpageContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`;

const PostHeading = styled.h1`
  @media (min-width: 667px) {
    font-size: 40px;
  }
`;

const CoverPhoto = styled.img`
  width: 100%;
  margin-bottom: 10px;
  align-items: flex-start;

  @media (min-width: 667px) and (max-width: 1024px) {
    width: 80%;
  }

  @media (min-width: 1025px) {
    width: 50%;
  }
`;

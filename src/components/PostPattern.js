import React, { useState } from 'react';
import styled from "styled-components";

const PATTERNS_URL = "http://localhost:8081/patterns";

export const PostPattern = () => {

  const [post, setPost] = useState("");
  const [source, setSource] = useState("")
  const [imageSource, setImageSource] = useState("")
  const [needles, setNeedles] = useState("")
  const [yarn, setYarn] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    
    fetch(PATTERNS_URL, {
      method: "POST",
      body: JSON.stringify({ post, source, imageSource, needles, yarn }),
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error(
          "Please try to post again"
        );
      } else {
        return res.json();
      }
    })
      .then(() => {
        setPost("");
        setSource("")
        setImageSource("")
        setYarn("")
        setNeedles("")
      })
      .catch((err) => console.log("error:", err));
  };

  return (
    <PostingForm onSubmit={handleSubmit}>
      <h1>Spread some knitting</h1>
      <TextfieldsContainer>
        <label>Post pattern</label>
        <input 
          type="text" 
          value={source}
          onChange={(event) => setSource(event.target.value)}
          placeholder="Post a URL" 
          required />
        
        <label>Post image</label>
        <input 
          type="text" 
          value={imageSource}
          onChange={(event) => setImageSource(event.target.value)}
          placeholder="Post a URL" 
          required />

        <label>Name of the pattern</label>
        <input type="text" value={post} onChange={(event) => setPost(event.target.value)} />

        <label>What yarn did you use?</label>
        <input type="text" value={yarn} onChange={(event) => setYarn(event.target.value)} />

        <label>What size of needles?</label>
        <input type="text" value={needles} onChange={(event) => setNeedles(event.target.value)} />
      </TextfieldsContainer>

      <RadioButtonContainer>
        <label>How suitable for a beginner?</label>
        <input type="radio" />
        <input type="radio" />
        <input type="radio" />
        <input type="radio" />
        <input type="radio" />
      </RadioButtonContainer>

      <button type="submit">Share pattern</button>
    </PostingForm>
  );
};

const PostingForm = styled.form`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #a4a99b;
  font-family: "Fraunces";
`;
const TextfieldsContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;
const RadioButtonContainer = styled.section`
  display: flex;
  flex-direction: row;
  margin: 40px;
`;

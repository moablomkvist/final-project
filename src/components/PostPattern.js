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
      body: ({ post, source, imageSource, needles, yarn }),
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

      <TextfieldsContainer>
        <h1>Share pattern with the circle</h1>
        <label>Add pattern link</label>
        <input 
          type="text" 
          value={source}
          onChange={(event) => setSource(event.target.value)}
          placeholder="URL" 
          required 
        />
        
        <label>Add image link</label>
        <input 
          type="text" 
          value={imageSource}
          onChange={(event) => setImageSource(event.target.value)}
          placeholder="URL" 
          required 
        />

        <label>Name of the pattern</label>
        <input 
          type="text" 
          value={post} 
          onChange={(event) => setPost(event.target.value)} 
        />

        <label>Name of the used yarn</label>
        <input 
          type="text" 
          value={yarn} 
          onChange={(event) => setYarn(event.target.value)} 
        />

        <label>Sizes of used needles</label>
        <input 
          type="text"  
          value={needles} 
          onChange={(event) => setNeedles(event.target.value)} 
          placeholder="Ex. Sock needles, 3,5 mm" 
        />

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

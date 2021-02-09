import React, { useState } from "react";

import { Button } from 'styling/lib/Button'
import { Form, Input, Container } from 'styling/lib/Card'
import { useHistory } from 'react-router-dom'

export const PostPattern = () => {
  const [post, setPost] = useState("");
  const [source, setSource] = useState("");
  const [imageSource, setImageSource] = useState("");
  const [needles, setNeedles] = useState("");
  const [yarn, setYarn] = useState("");

  const PATTERNS_URL = "http://localhost:8081/patterns";

  let history = useHistory();
  const handlePostSuccess = () => {
      history.push("/");
    }

  const handleSubmit = (event) => {
    event.preventDefault();
      fetch(PATTERNS_URL, {
        method: "POST",
        body: JSON.stringify({ post, source, imageSource, needles, yarn }),
        headers: { "Content-Type": "application/json" },
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
    <Form onSubmit={handleSubmit}>
      <Container>
        <h1>Share pattern with the circle</h1>
        <label>Add pattern link</label>
        <Input
          type="text"
          value={source}
          onChange={(event) => setSource(event.target.value)}
          placeholder="Link-adress"
          required
        />
        <label>Add image link</label>
        <Input
          type="text"
          value={imageSource}
          onChange={(event) => setImageSource(event.target.value)}
          placeholder="Image-adress"
          required
        />

        <label>Name of the pattern</label>
        <Input
          type="text"
          value={post}
          onChange={(event) => setPost(event.target.value)}
        />

        <label>Name of the used yarn</label>
        <Input
          type="text"
          value={yarn}
          onChange={(event) => setYarn(event.target.value)}
        />

        <label>Sizes of used needles</label>
        <Input
          type="text"
          value={needles}
          onChange={(event) => setNeedles(event.target.value)}
          placeholder="Ex. Sock needles, 3,5 mm"
        />
      </Container>
      <Button type="submit" >Share pattern</Button>
    </Form>
  );}

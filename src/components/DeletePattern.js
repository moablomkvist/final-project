import React from 'react'

import { Button } from 'styling/lib/Button'

export const DeletePattern = () => {

  const handleDeletePattern = (_id) => {
    fetch(`http://localhost:8081/patterns/${_id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    })
    .then((res) => {
      if (!res.ok) {
      throw new Error('Could not delete pattern');
      }
      return res.json();
    })
    .catch((err) => console.log("error:", err));
  }

  return (
    <>
    <Button onClick={handleDeletePattern}>Delete</Button> 
    </>
  )
}
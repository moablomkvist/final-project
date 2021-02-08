import React from 'react'

import { Button } from 'styling/lib/Button'

export const DeletePattern = () => {

  const DELETE_PATTERN_URL = `mongodb://localhost/knitting-circle/${id}`

  const handleDeletePattern = () => {
    fetch(DELETE_PATTERN_URL, {
      method: "DELETE",
    })
    .catch((err) => console.log("error:", err));
  }

  return (
    <>
    <Button onClick={handleDeletePattern}>Delete</Button>
    </>
  )
}
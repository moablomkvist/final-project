import React from 'react';
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { SymbolButton } from "styling/lib/SymbolButton"

export const DeletePattern = ({ pattern }) => {
const accessToken = useSelector((store) => store.userReducer.login.accessToken);
<<<<<<< HEAD
const userId = useSelector((store) => store.userReducer.login.accessToken);
=======
const userId = useSelector((store) => store.userReducer.login.userId);
>>>>>>> d15d488983b737a69b2eb80b4fb6d8181e3d7c33

let history = useHistory();
const handleDeleteSuccess = () => {
  history.go();
};

  const handleDeletePattern = (_id) => {
    fetch(`https://knitting-circle.herokuapp.com/patterns/${_id}`, {
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
        return res.json()
      })
      .then((json) => handleDeleteSuccess(json))
      .catch((err) => console.log("error:", err));
  };
  
  
  if (pattern.userId === userId) {
  return (
    <SymbolButton onClick={() => {handleDeletePattern(pattern._id);}}>
      <img src="../assets/trash-2.svg" alt="trash-delete"/>
    </SymbolButton>
  )
} else {
  return (
    <></>
  )
}
}
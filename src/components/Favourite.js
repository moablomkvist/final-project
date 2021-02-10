// import React from "react";
// import { useDispatch, useSelector } from "react-redux";

// import { userReducer } from "reducers/userReducer";


// export const Favourite = ({ getFavouritePatterns, id }) => {
//   // id is a pattern id that is coming as a prop from the HandlePattern component
//   const dispatch = useDispatch();
//   const userId = useSelector((store) => store.userReducer.login.userId);
//   const accessToken = useSelector((store) => store.userReducer.login.accessToken);
//   const URL_FAVOURITE = `http://localhost:8080/users/${userId}/favourites/${id}`;

//   //save works
//   const handleSave = () => {
//     fetch(URL_FAVOURITE, {
//       method: "PUT",
//       headers: {
//         Authorization: accessToken,
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => {
//         console.log(res);
//         if (res.ok) {
//           return res.json();
//         }
//         throw new Error(
//           "Could not add to favourites. User must be logged in."
//         );
//       })
//       .then((json) => {
//         dispatch(userReducer.actions.setFavouritePatterns(json));
//       });
//   };

//   const handleRemove = () => {
//     fetch(URL_FAVOURITE, {
//       method: "DELETE",
//       headers: {
//         Authorization: accessToken,
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => {
//         console.log(res);
//         if (res.ok) {
//           return res.json();
//         }
//         throw new Error(
//           "Could not remove from favourites. User must be logged in."
//         );
//       })
//       .then((json) => {
//         dispatch(userReducer.actions.setFavouritePatterns(json));
//       });
//   };
//   return (
//     <>
//         <button onClick={handleSave}>Save</button>
//         <button onClick={handleRemove}>Remove</button>
//     </>
//   );
// };


import React from 'react';

export const FavouritesPage = () => {

  const patterns = []

  return (
    <section>
      {patterns.map((pattern) => (
        <div key={pattern._id} pattern={pattern}></div>
      ))}
    </section>
  )
};
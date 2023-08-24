import React from 'react';
import RemoveMovie from './RemoveMovie';

const Movie = ({name, price}) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{price} <RemoveMovie/></p>
    </div>
  );
};

export default Movie;
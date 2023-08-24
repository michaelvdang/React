import { useContext } from "react";
import { MovieContext } from "./MovieContext";

import React from 'react'

const RemoveMovie = () => {
  const [movies, setMovies] = useContext(MovieContext);
  const removeMovie = (e) => {
    // e.preventDefault(); // prevent page refresh
    console.log(e);
    // setMovies({movies: movies.filter(movie => movie.id !== e.target.value.id)});
  }

  return (
    // <div>
      <button onClick={removeMovie}>X</button>
    // </div>
  )
}

export default RemoveMovie
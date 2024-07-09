import React, { createContext, useState } from "react";

export const MovieContext = createContext();

export const Provider = (props) => {
  const [input, SetInput] = useState("");
  const [movies, SetMovies] = useState([]);

  return (
    <>
      <MovieContext.Provider value={{ input, movies, SetMovies, SetInput }}>
        {props.children}
      </MovieContext.Provider>
    </>
  );
};

export default Provider;

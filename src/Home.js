import { useContext, useEffect } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
import {MovieContext} from "./UseContext";

function Home() {
  const { input, movies,SetMovies, SetInput} = useContext(MovieContext);




  const API_URL =
  "https://api.themoviedb.org/3/discover/movie?api_key=fe66cba2a4dd06102125fd9985fd1298";

const API_SEARCH =
  "https://api.themoviedb.org/3/search/movie?api_key=fe66cba2a4dd06102125fd9985fd1298&query=";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        SetMovies(data.results);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  console.log(movies);

  const handleSearch = (e) => {
    e.preventDefault();

    if (!input) return;
    fetch(API_SEARCH + input)
      .then((res) => res.json())
      .then((data) => SetMovies(data.results));
  };
  return (
    <div className="App">
      <div className="search">
        <div className="title">
          <h1>
            <Link to="/home" />
            Movies
          </h1>
        </div>

        <div className="search_box">
          <form onSubmit={handleSearch}>
            <input
              onChange={(e) => SetInput(e.target.value)}
              type="text"
              value={input}
            />
            <button type="submit">enter</button>
          </form>
        </div>
      </div>

      <div className="movie">
        {movies.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;

import { useContext, useEffect } from "react";
import MovieCard from "./MovieCard";
import { MovieContext } from "./UseContext";

function Home() {
  const { input, movies, SetMovies, SetInput } = useContext(MovieContext);

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

  const handleSearch = (e) => {
    e.preventDefault();

    if (!input) return;
    fetch(API_SEARCH + input)
      .then((res) => res.json())
      .then((data) => SetMovies(data.results));
  };

  return (
    <div className="App bg-black min-h-screen text-white flex flex-col items-center">
      <div className="w-full flex flex-col items-center px-4 py-8 sm:px-6 md:px-12 lg:px-16">
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-center">Movies</h1>
        </div>

        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl mb-8">
          <form onSubmit={handleSearch} className="flex">
            <input
              onChange={(e) => SetInput(e.target.value)}
              type="text"
              value={input}
              className="flex-grow p-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="Search for movies..."
            />
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-500 rounded-r hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Enter
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-7xl">
          {movies.map((movie, index) => (
            <MovieCard key={index} {...movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

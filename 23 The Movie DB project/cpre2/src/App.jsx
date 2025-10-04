import { useState } from "react";
import "./App.css";
import Navigation from "./movies/Navigation.jsx";
import MovieList from "./movies/MovieList.jsx";
import SearchMovies from "./movies/SearchMovies.jsx";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="bg-dark text-white min-vh-100">
      <Navigation />
      <div className="container mt-4">
        <SearchMovies onSearch={setSearchResults} />

        {searchResults.length > 0 ? (
          <div className="row">
            {searchResults.map((movie) => (
              <div
                key={movie.id}
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
              >
                <div className="card h-100 shadow-sm">
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                    className="card-img-top"
                  />
                  <div className="card-body bg-dark text-white">
                    <h6 className="card-title">{movie.title}</h6>
                    <p className="card-text">⭐ {movie.vote_average}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <MovieList />
        )}
      </div>
    </div>
  );
}

export default App;

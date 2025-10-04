import { useState } from 'react'
import './App.css'
import MovieList from './movies/MovieList.jsx'
import Navigation from './movies/Navigation.jsx'
import SearchMovies from './movies/SearchMovies.jsx'

export default function App() {
  const [searchResults, setSearchResults] = useState([])

  return (
    <div className='bg-dark text-light min-vh-100'>
      <Navigation />
      <div className='container mt-4'>
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
                    src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                    alt={movie.title}
                    className="card-img-top"
                  />
                  <div className="card-body bg-dark text-light">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">⭐ {movie.vote_average}</p>
                    <p className="card-text">✅ Votes: {movie.vote_count}</p>
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
  )
}

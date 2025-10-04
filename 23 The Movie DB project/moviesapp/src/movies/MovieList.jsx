import { useState, useEffect } from "react";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true)

  //useEffect(setup, dependencies)
  useEffect(() => {
    async function fetchMovies () {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/movie/popular?api_key=fd7f5071cb2085121a84f279a64e446c&language=es-ES&page=1"
        )
        const data = await res.json()
        setMovies(data.results)
      } catch (error) {
        console.error("Error cargando las películas: ", error)
      } finally {
        setLoading(false)
      }
    }
    fetchMovies()
  }, [])

  if (loading) return <p>Cargano películas...</p>

  return (
    <div className="container mt-4">
      <div className="row">
        {movies.map((movie) => (
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
                <button className="btn btn-info btn-lg">Ver detalles</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

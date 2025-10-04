import { useState, useEffect } from "react";

export default function SearchMovies({ onSearch }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query.trim() === "") {
      onSearch([]);
      return;
    }

    const fetchMovies = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=fd7f5071cb2085121a84f279a64e446c&language=es-ES&query=${query}`
        );
        const data = await res.json();
        onSearch(data.results || []);
      } catch (error) {
        console.error("Error buscando películas: ", error);
        onSearch([]);
      }
    };

    const timeoutId = setTimeout(fetchMovies, 500);
    return () => clearTimeout(timeoutId);
  }, [query, onSearch]);

  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar pelicula..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

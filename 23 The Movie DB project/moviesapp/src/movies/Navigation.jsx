import logo from "../assets/movies.png";

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Mini logo + nombre de la app */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src={logo} // <-- aquí puedes poner tu logo (ej: /cine-logo.png)
            alt="Cine Match Logo"
            width="30"
            height="30"
            className="d-inline-block align-text-top me-2"
          />
          Cine Match
        </a>

        {/* Botón hamburguesa para móviles */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links de navegación */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Películas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Favoritos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

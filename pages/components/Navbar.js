import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">        
        <Link href="/" passHref>
          <a className="navbar-brand">Mariana Cervantes</a>
        </Link>
        {/* Botón de colapso para pantallas pequeñas */}
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

        {/* Menú de navegación colapsable */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/cv" passHref>
                <a className="nav-link" aria-current="page">CV</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/tecnologias" passHref>
                <a className="nav-link">Tecnologías</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/miPerfil" passHref>
                <a className="nav-link">Mi Perfil</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

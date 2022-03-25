import Link from "next/link";

export default function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link href="./">
          <a className="navbar-brand" >
            Mariana Cervantes
          </a>
          </Link>
         
          <div className="d-flex" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link href="./cv">
                  <a className="nav-link active" aria-current="page">
                    CV
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="./tecnologias">
                  <a className="nav-link">Tecnologías</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="./miPerfil">
                  <a className="nav-link">Mi Perfil</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

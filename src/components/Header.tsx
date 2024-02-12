import "../styles/layout/header.scss";
import logo from "../assets/img/logo.svg";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-logo">
          <img src={logo} alt="Logo de Kaza" />
        </div>
        <nav className="header-nav">
          <ul className="header-list">
            <li
              className={`header-listitem${
                location.pathname === "/" ? " underline" : ""
              }`}
            >
              <Link to="/">Accueil</Link>
            </li>
            <li
              className={`header-listitem${
                location.pathname === "/a-propos" ? " underline" : ""
              }`}
            >
              <Link to="/a-propos">À Propos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

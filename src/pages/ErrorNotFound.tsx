import "../styles/pages/error-not-found.scss";
import { Link } from "react-router-dom";

function ErrorNotFound() {
  return (
    <>
      <h1 className="not-found-title">404</h1>
      <h2 className="not-found-title-2">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <p className="go-home-page">
        <Link to="/">Retourner sur la page d’accueil</Link>
      </p>
    </>
  );
}

export default ErrorNotFound;

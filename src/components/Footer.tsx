import "../styles/layout/footer.scss";
import logo from "../assets/img/logo-white.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img className="footer-logo" src={logo} alt="Logo de Kaza" />
        <p className="footer-copyright">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;

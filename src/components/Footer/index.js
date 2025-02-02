import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-content">
        <nav>
          <Link to="/Resources">Terms of Service</Link>
          <Link to="/Resources">FAQ</Link>
          <Link to="/Resources">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;

import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-content">
        <nav>
          <Link to="/">Terms of Service</Link>
          <Link to="/">FAQ</Link>
          <Link to="/">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;

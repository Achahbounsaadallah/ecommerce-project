import { Link } from "react-router-dom";
import Searchbar from "./searchbar";
import "./navbar.css";

function Navbar({ searchQuery, setSearchQuery }) {
  return (
    <nav className="navbar">
      <h2 className="logo">Logo</h2>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/smartwatches">Smartwatch</Link></li>
        <li><Link to="/smartphones">Smartphone</Link></li>
        <li><Link to="/accessoires">Accessoir</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <Searchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <ul className="nav-links">
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
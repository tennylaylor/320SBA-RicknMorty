import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  console.log("Function Navbar");
  return (
    <nav className="navbar">
      <div className="nav-brand">Rick and Morty</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/forum">Forum</Link>
      </div>
    </nav>
  );
}

export default Navbar;

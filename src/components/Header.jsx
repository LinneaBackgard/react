// src/components/Header.jsx
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    // navbar = Bootstrap-komponent för toppmenyer
    // bg-light = ljus bakgrund, border-bottom = tunn linje nederst
    <nav className="navbar bg-light border-bottom">
      {/* container = centrerad maxbredd + sidomarginaler */}
      <div className="container">
        {/* navbar-brand = plats för logga/namn */}
        <NavLink to="/" className="navbar-brand fw-semibold">
          Munamii Cakery
        </NavLink>

        {/* En enkel horisontell meny.
            ms-auto = "margin-start: auto" → putta listan till höger */}
        <ul className="nav ms-auto">
          {/* nav-item + nav-link = Bootstrap-standard för länkar i navs */}
          <li className="nav-item">
            <NavLink to="/home" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/products" className="nav-link">
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

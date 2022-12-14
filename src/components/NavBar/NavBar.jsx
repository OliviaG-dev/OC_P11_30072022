import { NavLink } from "react-router-dom";
import "./NavBar.css"
import Logo from "../../assets/LOGO.svg"

const NavBar = () => (
  <nav className="navbar">
    <img className="navbar__logo" src={Logo} alt={Logo} />
    <ul className="navbar__link">
      <li>
        <NavLink to="/"
        className={({ isActive }) => 
                            (isActive ? "Link__active" : "Link" )}>ACCUEIL
        </NavLink>
      </li>
      <li>
        <NavLink to="/about"
        className={({ isActive }) => 
        (isActive ? "Link__active" : "Link" )}>A PROPOS</NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;

import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { TbMenuDeep } from "react-icons/tb";
import MediaMenu from '../components/MediaMenu';
import '../styles/Navbar.css';

export default function Navbar() {
  const [menuVisibility, setMenuVisibility] = useState(false);

  const handleMenuClick = () => {
    setMenuVisibility(true);
  };

  const handleCloseMenu = () => {
    setMenuVisibility(false);
  };

  return (
    <>
      <nav className="navbar" aria-label="Main Navigation">
            <h1 className="main-title">
              <NavLink to="/">ChaseTheWebDev</NavLink>
            </h1>
            <ul className="navbar-list">
              <li>
                <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                  Work
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/resume" className={({ isActive }) => isActive ? 'active' : ''}>
                  Resume
                </NavLink>
              </li>
              <li>
                <NavLink to="/certifications" className={({ isActive }) => isActive ? 'active' : ''}>
                  Certifications
                </NavLink>
              </li>
              <li>
                <NavLink to="/press" className={({ isActive }) => isActive ? 'active' : ''}>
                  Press
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="menu-icon" onClick={handleMenuClick}>
              <TbMenuDeep />
            </div>
        </nav>
      {menuVisibility && <MediaMenu onClose={handleCloseMenu} />}
    </>
  );
}

import React from 'react';
import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import '../styles/MediaMenu.css';

export default function MediaMenu({ onClose }) {
  return createPortal(
    <div className="media-menu">
      <div className="media-menu-container">
        <div className="menu-nav-container">
          <h1><NavLink to='/' onClick={onClose}>ChaseTheWebDev</NavLink></h1>
          <button className="close-button" aria-label="Close Button" onClick={onClose}>
            <AiOutlineClose />
          </button>
        </div>
        <ul className="menu-list">
          <li><NavLink to='/' className={({ isActive }) => isActive ? 'active' : ''} onClick={onClose}>Work</NavLink></li>
          <li><NavLink to='/about' className={({ isActive }) => isActive ? 'active' : ''} onClick={onClose}>About</NavLink></li>
          <li><NavLink to='/resume' className={({ isActive }) => isActive ? 'active' : ''} onClick={onClose}>Resume</NavLink></li>
          <li><NavLink to='/certifications' className={({ isActive }) => isActive ? 'active' : ''} onClick={onClose}>Certifications</NavLink></li>
          <li><NavLink to='/press' className={({ isActive }) => isActive ? 'active' : ''} onClick={onClose}>Press</NavLink></li>
          <li><NavLink to='/contact' className={({ isActive }) => isActive ? 'active' : ''} onClick={onClose}>Contact</NavLink></li>
        </ul>
      </div>
    </div>,
    document.body
  );
};

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Logo } from "../assets/images/images";

function NavBar() {
  // State to control the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="text-green-900 z-50 sticky top-0 backdrop-blur-md bg-green-300">
      <div className="flex items-center justify-between h-[5.5rem]">
        <NavLink to="/" className="flex items-center">
          <img src={Logo} alt="logo" className="w-44 md:ml-16 mt-2" />
        </NavLink>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6 mr-24">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-green text-2xl ${
                isActive ? "text-green font-semibold" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-green text-2xl ${
                isActive ? "text-green font-semibold" : ""
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `hover:text-green text-2xl ${
                isActive ? "text-green font-semibold" : ""
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `hover:text-green text-2xl ${
                isActive ? "text-green font-semibold" : ""
              }`
            }
          >
            Gallery
          </NavLink>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden flex items-center mr-10">
          {/* Hamburger icon */}
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? (
              <span className="text-4xl">×</span> // Cross icon
            ) : (
              <span className="text-3xl">☰</span> // Hamburger icon
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-green-700 text-white flex flex-col items-center space-y-4 py-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-green-200 ${
                isActive ? "text-green-200 font-semibold" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-green-200 ${
                isActive ? "text-green-200 font-semibold" : ""
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `hover:text-green-200 ${
                isActive ? "text-green-200 font-semibold" : ""
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `hover:text-green-200 ${
                isActive ? "text-green-200 font-semibold" : ""
              }`
            }
          >
            Gallery
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default NavBar;

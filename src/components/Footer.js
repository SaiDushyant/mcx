import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <svg
        className="w-full h-10 mt-8 sm:mt-16 sm:h-16"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
        style={{ color: "#C8E6C9" }}
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div
        className="w-full h-auto pt-5 md:p-10 md:px-36"
        style={{ backgroundColor: "#C8E6C9" }}
      >
        <div className="w-9/12 md:w-full mx-auto bg-gray-400 h-[1px]"></div>

        {/* Wrapper for all sections */}
        <div className="flex flex-col md:flex-row gap-10 my-10 md:my-16 mx-16 text-left">
          {/* Row for Menu and Follow Us */}
          <div className="flex flex-col sm:flex-row sm:justify-between w-full gap-5">
            {/* Menu Section */}
            <div className="w-full sm:w-1/2">
              <h1 className="text-xl md:text-3xl font-bold">Menu</h1>
              <ul className="space-y-1 md:space-y-3 mt-1 md:mt-3 pl-1 text-base">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `text-gray-600 ${isActive ? "text-black" : ""}`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `text-gray-600 ${isActive ? "text-black" : ""}`
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services"
                    className={({ isActive }) =>
                      `text-gray-600 ${isActive ? "text-black" : ""}`
                    }
                  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/gallery"
                    className={({ isActive }) =>
                      `text-gray-600 ${isActive ? "text-black" : ""}`
                    }
                  >
                    Gallery
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Follow Us Section */}
            <div className="w-full sm:w-1/2">
              <h2 className="text-xl md:text-3xl font-bold">Follow Us</h2>
              <div className="space-y-1 md:space-y-3 mt-1 md:mt-3 text-base">
                <p className="text-gray-700 flex items-center gap-2">
                  <FaFacebook /> Facebook
                </p>
                <p className="text-gray-700 flex items-center gap-2">
                  <FaTwitter /> Twitter
                </p>
                <p className="text-gray-700 flex items-center gap-2">
                  <FaInstagram /> Instagram
                </p>
                <p className="text-gray-700 flex items-center gap-2">
                  <FaTelegram /> Telegram
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="w-full">
            <h2 className="text-xl md:text-3xl font-bold">Contact Info</h2>
            <div className="space-y-1 md:space-y-3 mt-1 md:mt-3 text-base md:text-xl pl-1">
              <p className="text-gray-700">
                <span className="font-semibold">Phone: </span>
                <a href="tel:+919080103716" className="text-blue-500">
                  +91 9080103716
                </a>
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Email: </span>
                <a
                  href="mailto:mcxfoundation@gmail.com"
                  className="text-blue-500"
                >
                  mcxfoundation@gmail.com
                </a>
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Address: </span>
                No.3/20, A K Thanda Village, Velanur, Harur. Dharmapuri, Tamil
                Nadu - 636906.
              </p>
            </div>
          </div>
        </div>

        <div className="w-9/12 md:w-full mx-auto bg-gray-400 h-[1px]"></div>
        <p className="text-center text-gray-600 text-sm mt-2 pb-5 md:pb-0">
          © 2024 MCX Foundation. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;

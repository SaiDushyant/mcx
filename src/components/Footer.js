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
      <div class="" data-negative="false">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          class="w-full h-10 mt-8 sm:mt-16 sm:h-16 bg-green-700"
        >
          <path
            fill="white"
            d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
          ></path>
        </svg>
      </div>

      <div
        className="w-full h-auto pt-5 md:p-10 md:px-36 bg-green-700"
        // style={{ backgroundColor: "#C8E6C9" }}
      >
        <div className="w-9/12 md:w-full mx-auto bg-white h-[1px]"></div>

        {/* Wrapper for all sections */}
        <div className="flex flex-col md:flex-row gap-10 my-10 md:my-16 mx-16 text-left">
          {/* Row for Menu and Follow Us */}
          <div className="flex flex-col sm:flex-row sm:justify-between w-full gap-5">
            {/* Menu Section */}
            <div className="w-full sm:w-1/2">
              <h1
                className="text-xl md:text-4xl font-bold "
                style={{ color: "#FFA500" }}
              >
                Menu
              </h1>
              <ul className="space-y-1 md:space-y-3 mt-1 md:mt-3 pl-1 font-semibold text-lg">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `text-white   ${isActive ? "text-black" : ""}`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `text-white ${isActive ? "text-black" : ""}`
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services"
                    className={({ isActive }) =>
                      `text-white ${isActive ? "text-black" : ""}`
                    }
                  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/gallery"
                    className={({ isActive }) =>
                      `text-white ${isActive ? "text-black" : ""}`
                    }
                  >
                    Gallery
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Follow Us Section */}
            <div className="w-full sm:w-1/2">
              <h2
                className="text-xl md:text-4xl font-bold"
                style={{ color: "#FFA500" }}
              >
                Follow Us
              </h2>
              <div className="space-y-1 md:space-y-3 mt-1 md:mt-3 font-semibold text-lg">
                <p className="text-white   flex items-center gap-2">
                  <FaFacebook style={{ color: "#FFA500" }} /> Facebook
                </p>
                <p className="text-white flex items-center gap-2">
                  <FaTwitter style={{ color: "#FFA500" }} /> Twitter
                </p>
                <p className="text-white flex items-center gap-2">
                  <FaInstagram style={{ color: "#FFA500" }} /> Instagram
                </p>
                <p className="text-white flex items-center gap-2">
                  <FaTelegram style={{ color: "#FFA500" }} /> Telegram
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="w-full">
            <h2
              className="text-xl md:text-3xl font-bold"
              style={{ color: "#FFA500" }}
            >
              Contact Info
            </h2>
            <div className="space-y-1 md:space-y-3 mt-1 md:mt-3 text-base md:text-xl pl-1">
              <p className="text-white">
                <span className="font-semibold">Phone: </span>
                <a href="tel:+919080103716">+91 9080103716</a>
              </p>
              <p className="text-white">
                <span className="font-semibold">Email: </span>
                <a href="mailto:mcxfoundation@gmail.com">
                  mcxfoundation@gmail.com
                </a>
              </p>
              <p className="text-white">
                <span className="font-semibold">Address: </span>
                No.3/20, A K Thanda Village, Velanur, Harur. Dharmapuri, Tamil
                Nadu - 636906.
              </p>
            </div>
          </div>
        </div>

        <div className="w-9/12 md:w-full mx-auto bg-white h-[1px]"></div>
        <p className="text-center text-gray-300 text-sm mt-2 pb-5 md:pb-0">
          © 2024 MCX Foundation. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;

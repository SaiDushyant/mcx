import React, { useState } from "react";
import GoogleTranslate from "./GoogleTranslate";

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm p-2 text-center inline-flex items-center"
      >
        Language
        <svg
          className="w-4 h-4 ml-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1l4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute mt-2 bg-white border border-gray-300 rounded-lg shadow-lg"
          style={{ width: "200px" }}
        >
          <ul className="py-2">
            <li>
              <GoogleTranslate />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;

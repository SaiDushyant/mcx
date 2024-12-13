import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { About, Gallery, Home, Services } from "./pages"; // Importing from pages/index.js

function App() {
  return (
    <Router>
      {" "}
      {/* Wrap the app with BrowserRouter */}
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link> {/* Link to the home page */}
              </li>
              <li>
                <Link to="/about">About</Link> {/* Link to the about page */}
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>{" "}
                {/* Link to the gallery page */}
              </li>
              <li>
                <Link to="/services">Services</Link>{" "}
                {/* Link to the services page */}
              </li>
            </ul>
          </nav>

          {/* Define the routes here */}
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home page route */}
            <Route path="/about" element={<About />} /> {/* About page route */}
            <Route path="/gallery" element={<Gallery />} />{" "}
            {/* Gallery page route */}
            <Route path="/services" element={<Services />} />{" "}
            {/* Services page route */}
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;

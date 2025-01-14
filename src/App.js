import React from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { About, Admin, Gallery, Home, Login, Services } from "./pages"; // Importing from pages/index.js

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/admin" element={<Admin />} />{" "}
          <Route path="/login" element={<Login />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;

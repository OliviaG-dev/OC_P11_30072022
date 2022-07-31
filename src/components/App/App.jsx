import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "../NavBar/NavBar";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Detail from "../../pages/Detail/Detail"
import Footer from "../../components/Footer/Footer"


function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />}  />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

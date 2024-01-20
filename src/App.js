import React from "react";
import Nav from "./components/Nav";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Footer from "./components/Footer";
//react-router-dom v6寫法
import { Routes, Route } from "react-router-dom";
import "./styles/styles.css";

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

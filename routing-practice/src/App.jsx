import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Users from "./components/Users";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="people" element={<Users />} />
      </Routes>
    </div>
  );

  function Home() {
    return (
      <div className="container">
        <div className="row" style={{ height: "50vh" }}>
          <div className="col-12 my-auto">
            <nav
              className="text-center bg-dark my-auto d-flex justify-content-center"
              style={{ borderRadius: "10px" }}
            >
              <Link
                to="/about"
                className="me-5 text-white display-6 anchorUnderLineRemove m-3"
                id="about"
              >
                About
              </Link>
              <Link
                to="/people"
                className="text-white display-6 anchorUnderLineRemove m-3"
              >
                People
              </Link>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

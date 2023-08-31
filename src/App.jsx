import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClockLoader";

import Home from "./pages/Home.jsx";
import logo from "./assets/logo.svg";
import "./App.css";
import CreatePost from "./components/CreatePost.jsx";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loading">
          <ClipLoader size={130} color={"#00ffee"} loading={loading} />
        </div>
      ) : (
        <div className="mt-2">
          
          <BrowserRouter>
            <header className="w-full flex justify-center items-center sm:px-8 px-4 py-1">
              <Link to="/">
                <img src={logo} alt="logo" className="object-contain w-40" />
              </Link>
            </header>

            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create-post" element={<CreatePost />} />
              </Routes>
            </main>
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;

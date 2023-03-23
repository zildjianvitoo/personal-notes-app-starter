import React from "react";
import Navigation from "./components/Navigation";
import { Link, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Archive from "./pages/Archive";

function App() {
  return (
    <div className="app-container">
      <header>
        <Link>
          <h1>Aplikasi Catatan</h1>
        </Link>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archives" element={<Archive />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

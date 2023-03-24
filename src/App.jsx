import React from "react";
import Navigation from "./components/Navigation";
import { Link, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Archive from "./pages/Archive";
import DetailPage from "./pages/DetailPage";
import AddNotePage from "./pages/AddNotePage";

function App() {
  return (
    <div className="app-container">
      <header>
        <Link to="/">
          <h1>Aplikasi Catatan</h1>
        </Link>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="notes/:id" element={<DetailPage />} />
          <Route path="/archives" element={<Archive />} />
          <Route path="notes/new" element={<AddNotePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

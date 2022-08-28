import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Watchlist } from "./components/Watchlist";
import { Watched } from "./components/Watched";
import { Add } from "./components/Add";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />

        <Routes>
          <Route element={<Watchlist />} path="/" />
          <Route element={<Add />} path="/add" />
          <Route element={<Watched />} path="/watched" />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;

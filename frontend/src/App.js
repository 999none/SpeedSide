import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import Home from "./pages/Home";
import Check from "./pages/Check";
import Utility from "./pages/Utility";
import Guide from "./pages/Guide";
import Support from "./pages/Support";
import Header from "./components/Header";

function App() {
  return (
    <div className="App min-h-screen">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/check" element={<Check />} />
          <Route path="/utility" element={<Utility />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/support" element={<Support />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}
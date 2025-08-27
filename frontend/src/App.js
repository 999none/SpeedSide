import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import Home from "./pages/Home";
import Check from "./pages/Check";
import Utility from "./pages/Utility";
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
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
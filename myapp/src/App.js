import { Route, Routes } from "react-router-dom";
import "./App.css";
import Statebasics from "./components/Statebasics";
import Navbar from "./components/Navbar";

import React from "react";
import TableArray from "./components/TableArray";
import Forms from "./components/Forms";
import ViewData from "./components/ViewData";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Statebasics />} />
        <Route path="/table" element={<TableArray />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/data" element={<ViewData />} />

        
      </Routes>

      {/* <Statebasics/>       */}
      {/* <Newval /> */}
    </div>
  );
}

export default App;

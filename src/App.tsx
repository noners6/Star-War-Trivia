import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Trivia } from "./Trivia";

function App() {
  // Make a request for a user with a given ID

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Trivia></Trivia>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

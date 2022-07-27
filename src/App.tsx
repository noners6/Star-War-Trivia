import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import { Trivia } from "./Trivia";

function App() {
  // Make a request for a user with a given ID

  return (
    <div
      style={{
        backgroundImage: `url(https://wallpaperaccess.com/full/503594.jpg)`,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className={"appContainer"}>
                <Trivia></Trivia>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

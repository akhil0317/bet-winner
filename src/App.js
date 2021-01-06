import React from "react";
import "./styles.css";
import SelectPlayers from "./components/MockPage1";
// import { Route } from "react-router-dom";
// import BetPage from "./components/BetPage";
import { BrowserRouter } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SelectPlayers />
      </BrowserRouter>
    </div>
  );
}

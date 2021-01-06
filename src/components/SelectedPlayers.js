import React from "react";
import SelectedPrayer from "./SelectedPlayer";
import classes from "./SelectedPlayers.module.css";
import { Route, Link } from "react-router-dom";
import BetPage from "./BetPage";
import { useState } from "react";
const selectedPlayers = (props) => {
  let selectedplayerList = props.selected.map((player) => {
    return <SelectedPrayer player={player} />;
  });
  return (
    <div className={classes.Selected}>
      <p style={{ color: "blue" }}>Selected players are below</p>
      {selectedplayerList}
      <button>
        <Link to="/Result">start</Link>
      </button>
      {/* <Route
        path="/Result"
        exact
        render={() => <BetPage players={props.selected} />} */}
    </div>
  );
};

export default selectedPlayers;

import React from "react";
// import Player from "./Player";
const selectedPlayers = (props) => {
  return (
    <div>
      <div class="card" style={{ width: "18rem" }}>
        <img src={props.player.image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.player.name}</h5>
          <p class="card-text">wins:{props.player.wins}</p>
          <p class="card-text">Bet:{props.player.bet}</p>
          <p class="card-text">price:{props.player.price}</p>
        </div>
      </div>
    </div>
  );
};

export default selectedPlayers;

import React from "react";

const displayWinner = (props) => {
  return (
    <span class="card" style={{ width: "18rem" }}>
      <img src={props.player.image} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{props.player.name}</h5>

        {props.player.winner ? (
          <span style={{ color: "green" }}>Winner</span>
        ) : (
          <span style={{ color: "red" }}>Looser</span>
        )}
        <br />
      </div>
    </span>
  );
};

export default displayWinner;

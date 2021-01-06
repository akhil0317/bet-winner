import React from "react";
import classes from "./Player.module.css";
const Player = (props) => {
  return (
    <div className={classes.Player}>
      <input
        type="checkbox"
        onClick={() => {
          let playerDetails = {
            name: props.name,
            image: props.image,
            wins: props.wins,
            price: props.price,
            bet: props.bet
          };
          props.checked(playerDetails);
        }}
      />
      <span>{props.name}</span>
      <img src={props.image} alt="image" style={{ width: "50px" }} />
      <span>{props.bet}</span>
      <span>{props.wins}</span>
      <span>{props.loose}</span>
      <span>{props.price}</span>
    </div>
  );
};

export default Player;

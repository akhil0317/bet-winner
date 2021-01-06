import React, { Component } from "react";
import classes from "./MockPage1.module.css";
import Player from "./Player";
import axios from "axios";
import SelectedPlayer from "./SelectedPlayer";
import SelectedPlayers from "./SelectedPlayers";
import { Route } from "react-router-dom";
import BetPage from "./BetPage";
class SelectPlayers extends Component {
  state = {
    players: [],
    searchValue: "",
    searchedPlayers: [],
    searched: false,
    playingPlayers: []
  };

  checkboxClickedHandler = (player) => {
    console.log(player);
    let selectedPlayers = [...this.state.playingPlayers, player];
    this.setState({
      playingPlayers: selectedPlayers
    });
  };

  inputchangeHandler = (e) => {
    // this.setState({

    // });
    let name = "";
    this.setState({
      searchValue: e.target.value,
      searched: true,
      searchedPlayers: this.state.players.filter((player) => {
        name = player.Name.toLowerCase();
        return name.includes(e.target.value);
      })
    });
  };

  componentDidMount() {
    axios
      .get(
        "https://s3-ap-southeast-1.amazonaws.com/he-public-data/bets7747a43.json"
      )
      .then((response) => {
        response.data.map((ele) => {
          ele.wins = 0;
          ele.lose = 0;
        });
        this.setState({
          players: response.data
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    let playerDetails;
    if (this.state.searched) playerDetails = this.state.searchedPlayers;
    else playerDetails = this.state.players;
    const playersDetails = playerDetails.map((player) => {
      return (
        <li class="list-group-item" key={player.name}>
          <Player
            name={player.Name}
            price={player.Price}
            bet={player.Bet}
            image={player["Profile Image"]}
            wins={player.wins}
            loose={player.lose}
            checked={this.checkboxClickedHandler}
          />
        </li>
      );
    });

    return (
      <React.Fragment>
        <SelectedPlayers selected={this.state.playingPlayers} />
        <div className={classes.MockPage1}>
          <h3 className={classes.h1}>Select playing 9</h3>
          <input
            type="text"
            placeholder="search player"
            value={this.state.searchValue}
            onChange={(e) => this.inputchangeHandler(e)}
          />
          <hr />
          <div className={classes.Container}>
            <span>Player Select</span>
            <span>Name</span>
            <span>Image</span>
            <span>Bet</span>
            <span>Win</span>
            <span>Loose</span>
            <span>Price</span>
          </div>
          <ul class="list-group">{playersDetails}</ul>
        </div>
        <Route
          path="/Result"
          exact
          render={() => <BetPage players={this.state.playingPlayers} />}
        />
      </React.Fragment>
    );
  }
}

export default SelectPlayers;

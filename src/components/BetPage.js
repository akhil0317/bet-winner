import React, { Component } from "react";
import DisplayWinner from "./DisplayWinner";
class BetPage extends Component {
  state = {
    betAmount: 0,
    players: []
  };
  // componentWillMount() {
  //   this.setState({

  //   });
  // }

  componentDidMount() {
    this.setState({
      betAmount: Math.floor(Math.random() * 9) + 1,
      players: this.props.players
    });
  }

  render() {
    let playersFinally = this.state.players.map((player) => {
      console.log(player.bet, this.state.betAmount);
      if (player.bet == this.state.betAmount) {
        player.winner = true;
      } else player.winner = false;
      return <DisplayWinner player={player} />;
    });
    return (
      <div>
        <h1>{this.state.betAmount}</h1>
        <h3>please check the winner below!!!</h3>
        {playersFinally}
      </div>
    );
  }
}

export default BetPage;

import React, { Component } from "react";

export default class App extends Component {
  state = {
    players: []
  };
  componentDidMount() {
    fetch("http://localhost:4000/manage/players")
      .then(res => res.json())
      .then(res => {
        this.setState({ players: res });
      });
  }
  render() {
    console.log(this.state.players);
    return (
      <div className="container">
        {this.state.players.map(player => (
          <div>
            <li>{player.fname}</li>
          </div>
        ))}
      </div>
    );
  }
}

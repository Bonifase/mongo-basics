import React, { Component } from "react";
import Header from "./components/Header";
import Advert from "./components/Advert";
import "./App.css";

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
      <div>
        <Header />
        <div className="showcase text-center">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 font-weight-bold">Punny Football</h1>
            <h4 className="lead font-italic ">
              Provides statistics and results on national and international soccer competitions worldwide. Example of football
              statistics include league standings, form tables, top scorers, scoring stats, statistical previews, goal times and
              attendance stats.
            </h4>
            <a className="btn btn-outline-secondary white" href="#">
              Coming soon
            </a>
          </div>
          <div className="product-device shadow-sm d-none d-md-block" />
          <div className="product-device product-device-2 shadow-sm d-none d-md-block" />
        </div>
        <Advert />
        <div className="players-section">
          {this.state.players.map(player => (
            <div class="cards" style={{ width: "18rem" }}>
              <img src={player.photo} class="card-image" alt={player.fname} />
              <div class="card-bodys">
                <h5 class="card-title">
                  {player.fname} {player.lname}
                </h5>
                <p class="card-text">Country: {player.country}</p>
                <p class="card-text">City: {player.city}</p>
                <p class="card-text">Team: {player.team}</p>
                <p class="card-text">Goals Scored: {player.goals}</p>
                <a href="/" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

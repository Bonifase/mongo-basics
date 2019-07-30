import React, { Component } from "react";
import Header from "./components/Header";
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
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
          <div className="col-md-5 p-lg-5 mx-auto my-5">
            <h1 className="display-4 font-weight-normal">Punny headline</h1>
            <p className="lead font-weight-normal">
              And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s
              marketing pages.
            </p>
            <a className="btn btn-outline-secondary" href="#">
              Coming soon
            </a>
          </div>
          <div className="product-device shadow-sm d-none d-md-block" />
          <div className="product-device product-device-2 shadow-sm d-none d-md-block" />
        </div>
        <div class="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
          <div class="bg-dark pt-2 px-2 pt-md-5 px-md-5 text-center text-black overflow-hidden">
            {this.state.players.map(player => (
              <div className="row">
                <div className="col-md-3">
              <div className="card" style={{ width: "18rem", align: "center" }}>
                <img src={player.photo} class="card-img-top" alt={player.fname} />
                <div className="card-body">
                  <h5 className="card-title">
                    {player.fname} {player.lname}
                  </h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <a href="/" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
              </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

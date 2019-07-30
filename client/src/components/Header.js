import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="navbar site-header fixed-top py-2">
        <div className="container d-flex flex-column flex-md-row justify-content-between">
          <a className="nav-link d-md-inline-block" href="/">
            Tour
          </a>
          <a className="nav-link d-md-inline-block" href="/players">
            Teams
          </a>
          <a className="nav-link d-md-inline-block" href="/">
            Clubs
          </a>
          <a className="nav-link  d-md-inline-block" href="/">
            Top Scorers
          </a>
          <a className="nav-link d-md-inline-block" href="/">
            Support
          </a>
          <a className="nav-link py-2 d-md-inline-block" href="/">
            Pricing
          </a>
          <a className="nav-link py-2  d-md-inline-block" href="/">
            Cart
          </a>
        </div>
      </nav>
    );
  }
}

export default Header;

import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/beers">Beers</Link>
          </li>
          <li>
            <Link to="/random">Random Beer</Link>
          </li>
          <li>
            <Link to="/new-beer">New Beer</Link>
          </li>
        </ul>
      </div>
    );
  }
}

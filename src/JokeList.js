import React, { Component } from "react";
import axios from "axios";
class JokeList extends Component {
  componentDidMount() {
    axios.get("httpps://icanhazdadjoke.com/");
  }
  render() {
    return (
      <div>
        <h1>Joke List</h1>
      </div>
    );
  }
}
export default JokeList;

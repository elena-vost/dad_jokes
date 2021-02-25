import React, { Component } from "react";
import axios from "axios";
class JokeList extends Component {
  async componentDidMount() {
    let res = await axios.get("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" },
    });
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

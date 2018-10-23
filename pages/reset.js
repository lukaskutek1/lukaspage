import React from "react";
import Login from "./components/login.js";
import Header from "./components/header.js";
import Reset from "./components/reset.js";
import Signup from "./components/signup.js";
import "./styles.scss";

export default class App extends React.Component {
  state = {
    name: "",
    password: ""
  };

  render() {
    return (
      <div className="App">
        <div className="nevim">
          <Header />
          <Reset />
        </div>
      </div>
    );
  }
}

import React from "react";
import Login from "./components/login.js";
import Header from "./components/header.js";
import Reset from "./components/reset.js";
import Signup from "./components/signup.js";
import "./styles.scss";

export default class App extends React.Component {
  state = {
    name: "",
    password: "",
    email: "",
    odeslano: false,
    dataPush: true
  };
  saveCredentials = (name, password, email) => {
    this.setState({
      name,
      password,
      email,
      odeslano: true
    });
  };
  test1() {
    console.info("test z eventu 1", this);
  }
  test2 = () => {
    console.info("test z eventu 2", this);
    this.nasledujici();
  };
  nasledujici() {
    console.info("nasledujici", this);
  }

  // v podstate jednoduche pravidlo je cokoliv pouzijes uvnitr JSX tak musi byt tim () => {} k máš ještě 5 min?
  // jj p sry
  // ale u funkci ktere nasleduji uz to nevadi
  render() {
    const { name, password, email, dataPush, odeslano } = this.state;
    console.info("sdileny state: ", this.props.shared);
    // dík ještě little q nazevFce(){} === nazevFce = () => {} ?
    // je to stejne ale rozdil je v chovani this.
    // bezpecnejsi je psat nazevFce = () => {} ... tam se to chova vzdy spravne ale je to mene optimalni
    // musi se to pouzivat pro vsechny eventy kuprikladu tam je jinak this. undefined
    return (
      <div className="App" onClick={this.test1}>
        <div className="nevim" onClick={this.test2}>
          <Header
            name={name}
            password={password}
            email={email}
            saveCredentials={this.saveCrentials}
          />
          {dataPush ? (
            <Login />
          ) : (
            <Signup
              name={name}
              password={password}
              email={email}
              saveCredentials={this.saveCrentials}
            />
          )}
        </div>
      </div>
    );
  }
}

import React from "react";
import Login from "./components/login.js";
import Header from "./components/header.js";
import Reset from "./components/reset.js";
import Signup from "./components/signup.js";
import "./styles.scss";

//nevím jak dostat state z login do signup abych mohl v signup uložit udaje do statu a z loginu se na to příhlásit
// no :D //tahle struktura mi děla problém :D kdyžyb tam byl switch takl bych to zvládl napadlo mě to tam nějak dávat přes header? jestli by to šlo
// ono jak funguje next tak ted signup a login jsou jakoby oddelene appky takze nesdili state ale next js ma _app.js komponentu kde je state
// ktery je prave sdileny do vsech vstupnich route tak to bych asi měl využít? jj to je presne na to co chces

export default class App extends React.Component {
  saveCredentials = (name, password, email) => {
    this.setState({
      name,
      password,
      email,
      odeslano: true
    });
  };
  render() {
    const { name, password, email, dataPush, odeslano } = this.props;
    console.log("test z signup: ", name);
    return (
      <div className="App">
        <div className="nevim">
          <Header
            name={name}
            password={password}
            email={email}
            saveCredentials={this.saveCrentials}
          />
          <Signup
            name={name}
            password={password}
            email={email}
            saveCredentials={this.saveCrentials}
          />
        </div>
      </div>
    );
  }
}

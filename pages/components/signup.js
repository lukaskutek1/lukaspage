import React from "react";
import "../styles.scss";
import Link from "next/link";
export default class Login extends React.Component {
  state = {
    name: "",
    password: "",
    password2: "",
    email: "",
    emailCheck: false
  };

  newAccount = () => {
    const name = this.refs.name.value;
    const password = this.refs.password.value;
    const email = this.refs.email.value;
    console.log("signup: ", name, password, email);
    this.props.saveCredentials(name, password, email);
  };
  changeName = e => {
    const name = e.target.value;

    this.setState({
      name
    });
  };
  changePassword = e => {
    const password = e.target.value;
    this.setState({
      password
    });
  };
  changePassword2 = e => {
    const password2 = e.target.value;
    this.setState({
      password2
    });
  };
  changeEmail = e => {
    const email = e.target.value;
    console.log("changeEmail", email);
    this.setState({
      email
    });
    let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (reg.test(email) === false) {
      this.setState({
        emailCheck: false
      });
    } else {
      this.setState({
        emailCheck: true
      });
    }
  };
  render() {
    return (
      <div className="Welcome">
        <div className="Signin">
          <h1 className="headline">New account</h1>
          <br />
          <div className="loginForm">
            <br />
            <div className="inputField">
              <i className="fas fa-user" />
              <input
                type="text"
                ref="name"
                className="textboxForm"
                placeholder="username"
                value={this.state.name}
                onChange={this.changeName}
              />
              <i
                className={
                  this.state.name.length < 5
                    ? "fas fa-times-circle"
                    : "fas fa-check-circle"
                }
              />
            </div>
            <div className="inputField">
              <i className="far fa-envelope" />
              <input
                type="text"
                ref="email"
                className="textboxFormEmail"
                placeholder="name@email.net"
                onChange={this.changeEmail}
                value={this.state.email}
              />
              <i
                className={
                  this.state.emailCheck
                    ? "fas fa-check-circle"
                    : "fas fa-times-circle"
                }
              />
            </div>
            <div className="inputField">
              <i className="fas fa-unlock-alt" />
              <input
                type="password"
                ref="password"
                className="textboxForm"
                placeholder="password"
                value={this.state.password}
                onChange={this.changePassword}
              />
              <i
                className={
                  this.state.password.length < 8
                    ? "fas fa-times-circle"
                    : "fas fa-check-circle"
                }
              />
            </div>
            <div className="inputField">
              <i className="fas fa-unlock-alt" />
              <input
                type="password"
                ref="password"
                className="textboxForm"
                placeholder="password"
                value={this.state.password2}
                onChange={this.changePassword2}
              />
              <i
                className="notEqual"
                className={
                  this.state.password2 == this.state.password &&
                  this.state.password2.length > 7
                    ? "fas fa-equals"
                    : "fas fa-not-equal"
                }
              />
            </div>
            <button onClick={this.newAccount} className="btn">
              create new account
            </button>
          </div>
          <div className="links">
            <Link href="/">
              <a>Login</a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

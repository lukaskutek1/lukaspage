import React from "react";
import "../styles.scss";
import Link from "next/link";
export default class Login extends React.Component {
  logIn = () => {
    const name = this.refs.name.value;
    const password = this.refs.password.value;
    if (name === this.props.name && this.props.password === password) {
      alert("SUKCES");
    }
  };
  render() {
    console.info("sdileny state: ", this.props.name);
    return (
      <div className="Welcome">
        <div className="Signin">
          <h1 className="headline">Sign in</h1>
          <br />
          <div className="loginForm">
            <br />
            <div className="inputField">
              <i className="fas fa-user" />
              <input
                type="text"
                ref="name"
                className="textbox"
                placeholder="username"
              />
            </div>

            <div className="inputField">
              <i className="fas fa-unlock-alt" />
              <input
                type="password"
                ref="password"
                className="textbox2"
                placeholder="password"
              />
            </div>
            <button logIn={this.logIn} className="btn">
              log in
            </button>
          </div>
          <div className="links">
            <Link prefetch href="/reset">
              <a>Reset </a>
            </Link>
            password or
            <Link prefetch href="/signup">
              <a> Create </a>
            </Link>
            an account
          </div>
        </div>
      </div>
    );
  }
}

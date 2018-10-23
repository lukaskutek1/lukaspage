import React from "react";
import "../styles.scss";
import Link from "next/link";
export default class Reset extends React.Component {
  credentials = () => {
    const name = this.refs.name.value;
    const password = this.refs.password.value;

    this.props.saveCredentials(name, password);
  };

  onClickLogin = () => {
    this.props.changeType("login");
  };
  render() {
    return (
      <div className="Welcome">
        <div className="Signin">
          <h1 className="headline">Reset password</h1>
          <br />
          <div className="loginForm">
            <br />
            <div className="inputField">
              <i className="far fa-envelope" />
              <input
                type="text"
                ref="email"
                className="email"
                placeholder="your-email@dot.net"
              />
            </div>
            <button className="btn">reset password</button>
            <div className="links">
              <Link prefetch href="/">
                <a>Login</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

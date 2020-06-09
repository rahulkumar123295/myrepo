import React, { Component } from "react";
import { Link } from "react-router-dom";

class Screen extends Component {
  constructor() {
    super();
    this.state = { username: "", password: "" };
    this.ref1 = React.createRef();
    this.ref2 = React.createRef();
  }
  componentDidMount() {
    return (
      <div>
        <div className="form-group">
          <label>Username</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={this.state.username}
            onChange={(e) => this.setState({ username: e.target.value })}
          ></input>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          ></input>
        </div>
      </div>
    );
  }
  signup = (e) => {
    e.preventDefault();
    this.ref1.current.classList.remove("outerbox");
    this.ref1.current.classList.add("newouterbox");
    this.ref2.current.classList.add("form-group");
    const newlabel = document.createElement("label");
    newlabel.innerHTML = "Confirm Psassword";
    const newinput = document.createElement("input");
    newinput.classList.add("form-control");
    newinput.placeholder = "Confirm Password";
    newinput.type = "password";
    this.ref2.current.appendChild(newlabel);
    this.ref2.current.appendChild(newinput);
  };

  render() {
    return (
      <div className="loginform">
        <div className="outerbox" ref={this.ref1}>
          {this.renderlist}
          <form>
            {this.componentDidMount()}
            <div ref={this.ref2}></div>
            <div className="buttons">
              <Link to={"/transaction"} className="btn btn-primary signin">
                Login
              </Link>
              <button
                type="submit"
                className="btn btn-primary signup"
                onClick={this.signup}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Screen;

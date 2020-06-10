import React, { Component } from "react";
import { Link } from "react-router-dom";
class Transaction extends Component {
  constructor() {
    super();
    this.state = { from: "", to: "", amount: "", type: "", balance: 150000 };
    this.ref1 = React.createRef();
  }
  payamount = () => {
    if (
      this.state.from === "" ||
      this.state.type === "" ||
      this.state.to === "" ||
      this.state.amount === ""
    )
      return alert("Please enter all required fields");
    else {
      this.setState({ balance: this.state.balance - this.state.amount });
      const tablebody = document.createElement("tbody");
      const newtr = document.createElement("tr");
      const newtd1 = document.createElement("td");
      newtd1.innerHTML = new Date().toLocaleString();
      const newtd2 = document.createElement("td");
      newtd2.innerHTML = this.state.from;
      const newtd3 = document.createElement("td");
      newtd3.innerHTML = this.state.type;
      const newtd4 = document.createElement("td");
      newtd4.innerHTML = this.state.amount;
      newtr.appendChild(newtd1);
      newtr.appendChild(newtd2);
      newtr.appendChild(newtd3);
      newtr.appendChild(newtd4);
      tablebody.appendChild(newtr);
      this.ref1.current.appendChild(tablebody);
    }
  };
  showbalance = () => {
    this.setState({ balance: this.state.balance - this.state.amount });
  };
  render() {
    return (
      <div className="transaction container-fluid">
        <nav>
          <div className="leftnav">
            <Link to={"/transaction"} className="navbar">
              Transactions
            </Link>
            <Link to={"/capital"} className="navbar">
              Capital
            </Link>
          </div>
          <div className="rightnav">
            <Link to={"/"} className="navbar ">
              Logout
            </Link>
          </div>
        </nav>
        <div className="row">
          <div className="col-lg-3 leftcolumn">
            <h1>New Transaction</h1>
            <div>
              <label>From</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={this.state.from}
                onChange={(e) => this.setState({ from: e.target.value })}
              ></input>
            </div>
            <div>
              <label>To</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={this.state.to}
                onChange={(e) => this.setState({ to: e.target.value })}
              ></input>
            </div>
            <div>
              <label>Amount</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter Amount"
                value={this.state.amount}
                onChange={(e) => this.setState({ amount: e.target.value })}
              ></input>
              <label>Payment Type (Online or Card)</label>
              <input
                type="text"
                className="form-control"
                placeholder="Online or Card"
                value={this.state.type}
                onChange={(e) => this.setState({ type: e.target.value })}
              ></input>
              <button
                type="submit"
                className="btn btn-primary paybutton"
                onClick={this.payamount}
              >
                Pay
              </button>
            </div>
          </div>
          <div className="col-lg-9 rightcolumn">
            <table className="table" ref={this.ref1}>
              <thead className="theaddark">
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Beneficary Name</th>
                  <th scope="col">Payment Type</th>
                  <th scope="col">Amount</th>
                </tr>
              </thead>
            </table>
            <button
              type="button"
              className="btn btn-primary balance"
              data-toggle="modal"
              data-target="#exampleModal"
              onClick={this.showbalance}
            >
              {`Current Balance: ${this.state.balance}`}
            </button>

            <div
              className="modal fade"
              id="exampleModal"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Current Balance
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">{this.state.balance}</div>
                  <div className="modal-footer"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Transaction;

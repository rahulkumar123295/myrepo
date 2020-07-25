import React, { Component } from "react";
import { Link } from "react-router-dom";
import Photo from "./Photo";
class Registration extends Component {
  constructor() {
    super();
    this.state = {
      studentname: "",
      rollno: "",
      class: "",
      email: "",
      check1: "",
    };
    this.ref1 = React.createRef();
    this.ref2 = React.createRef();
    this.ref3 = React.createRef();
    this.index = 1;
  }
  registerstudent = () => {
    if (
      this.state.studentname === "" ||
      this.state.rollno === "" ||
      this.state.class === "" ||
      this.state.email === ""
    )
      return alert("Please enter all required fields");
    else {
      const tablebody = document.createElement("tbody");
      const newtr = document.createElement("tr");
      newtr.classList.add("tabledata");
      newtr.classList.add(`rahul${this.index}`);

      const newtd1 = document.createElement("td");
      newtd1.innerHTML = `${new Date().getDate()} - ${
        new Date().getMonth() + 1
      } - ${new Date().getFullYear()}`;
      const newtd2 = document.createElement("td");
      const newtd3 = document.createElement("button");
      newtd3.classList.add("namebutton");
      newtd3.innerHTML = this.state.studentname;
      newtd3.onclick = () => this.showdetails();

      const newtd4 = document.createElement("td");
      const newtd5 = document.createElement("input");
      newtd5.type = "checkbox";
      newtd5.classList.add("firstcheck");
      newtd5.onclick = (e) => this.firstcheckbox(e);
      newtd4.appendChild(newtd5);

      const newtd6 = document.createElement("td");
      const newtd7 = document.createElement("input");
      newtd7.type = "checkbox";
      newtd7.classList.add("secondcheck");
      newtd7.onclick = (e) => this.secondcheckbox(e);
      newtd6.appendChild(newtd7);

      const newtd8 = document.createElement("td");
      const newtd9 = document.createElement("button");
      newtd9.type = "submit";
      newtd9.innerHTML = "Delete Entry";
      newtd9.classList.add("deletebutton");
      newtd9.classList.add(`rahul${this.index}`);
      newtd9.onclick = (e) => this.deleteregistration(e);
      newtd8.appendChild(newtd9);

      newtd2.appendChild(newtd3);
      newtr.appendChild(newtd1);
      newtr.appendChild(newtd2);
      newtr.appendChild(newtd4);
      newtr.appendChild(newtd6);
      newtr.appendChild(newtd8);

      tablebody.appendChild(newtr);
      this.ref1.current.appendChild(tablebody);
    }
    this.index++;
  };
  firstcheckbox() {
    let secondcheck = document.querySelector(".secondcheck");
    secondcheck.checked = false;
  }
  secondcheckbox() {
    let firstcheck = document.querySelector(".firstcheck");
    firstcheck.checked = false;
  }
  showdetails() {
    return alert(
      `Student Name: ${this.state.studentname}
      Class: ${this.state.class}
      Roll no: ${this.state.rollno}
      Email: ${this.state.email}`
    );
  }
  deleteregistration(e) {
    let deleteclass = e.target.classList[1];
    let deletebutton = document.querySelector(`.${deleteclass}`);
    let deleteitem = deletebutton.parentElement;
    deleteitem.remove();
  }

  render() {
    return (
      <div className="transaction container-fluid">
        <nav>
          <div className="rightnav">
            <Link to={"/"} className="navbar ">
              Logout
            </Link>
          </div>
        </nav>
        <div className="row">
          <div className="col-lg-3 leftcolumn">
            <h1 className="newregistration">New Registration</h1>
            <Photo />
            <div className="details">
              <div>
                <label className="labels">Student name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Student name"
                  value={this.state.Studentname}
                  onChange={(e) =>
                    this.setState({ studentname: e.target.value })
                  }
                ></input>
              </div>
              <div>
                <label className="labels">Class</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Class"
                  value={this.state.class}
                  onChange={(e) => this.setState({ class: e.target.value })}
                ></input>
              </div>
              <div>
                <label className="labels">Roll no</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Roll no"
                  value={this.state.rollno}
                  onChange={(e) => this.setState({ rollno: e.target.value })}
                ></input>
                <label className="labels">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                ></input>
                <button
                  type="submit"
                  className="btn btn-primary registerbutton"
                  onClick={this.registerstudent}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-9 rightcolumn">
            <table className="table" ref={this.ref1}>
              <thead className="theaddark">
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Student name</th>
                  <th scope="col">Present</th>
                  <th scope="col">Absent</th>
                  <th scope="col"></th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default Registration;

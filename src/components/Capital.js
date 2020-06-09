import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
class Capital extends Component {
  constructor() {
    super();
    this.state = { documentFile: null, dropFile: null, amount: "" };
    this.ref1 = React.createRef();
  }
  submitdocuments = () => {
    if (
      this.state.documentFile === null ||
      this.state.dropFile === null ||
      this.state.amount === ""
    )
      return alert("Upload Documents");
    else {
      const tablebody = document.createElement("tbody");
      const newtr = document.createElement("tr");
      const newtd1 = document.createElement("td");
      newtd1.innerHTML = new Date().toLocaleString();
      const newtd2 = document.createElement("td");
      newtd2.innerHTML = this.state.documentFile.name;
      const newtd3 = document.createElement("td");
      newtd3.innerHTML = this.state.documentFile;
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
  documentFileChange = (event) => {
    this.setState({ documentFile: event.target.files[0] });
  };
  dropFileChange = (event) => {
    this.setState({ dropFile: event.target.files[0] });
  };
  documentupload = () => {
    const formData = new FormData();

    formData.append(
      "myFile",
      this.state.documentFile,
      this.state.documentFile.name
    );

    axios.post("api/uploadfile", formData);
  };
  dropfilehere = () => {
    const formData = new FormData();

    formData.append("myFile", this.state.dropFile, this.state.dropFile.name);

    axios.post("api/uploadfile", formData);
  };
  render() {
    return (
      <div className="transaction container-fluid">
        <nav>
          <Link to={"/transaction"} className="navbar">
            Transactions
          </Link>
          <Link to={"/capital"} className="navbar">
            Capital
          </Link>
        </nav>
        <div className="row">
          <div className="col-lg-3 leftcolumn">
            <h1>Upload Documents</h1>
            <div>
              <label>Document</label>
              <input type="file" onChange={this.documentFileChange}></input>
              <button
                onClick={this.documentupload}
                className="btn btn-danger uploadbutton"
              >
                Upload!
              </button>
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
              <label>Drop file here</label>
              <input type="file" onChange={this.dropFileChange}></input>
              <button
                onClick={this.dropfilehere}
                className="btn btn-danger uploadbutton"
              >
                Upload!
              </button>
            </div>
            <div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.submitdocuments}
              >
                Submit
              </button>
            </div>
          </div>
          <div className="col-lg-9 rightcolumn">
            <table class="table" ref={this.ref1}>
              <thead class="theaddark">
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Document</th>
                  <th scope="col">Preview</th>
                  <th scope="col">Amount</th>
                  
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default Capital;

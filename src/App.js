import logo from "./logo.svg";
import "./App.css";
import React, { Component, useState } from "react";
import axios from "axios";
import { Navbar, Nav, NavItem } from "react-bootstrap";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const onFileChange = (event) => {
    // Update the state
    console.log(event.target.files[0]);
    setSelectedFile(event.target.files[0]);
  };

  const onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append("file", selectedFile);
    formData.append("date", "DATE");
    formData.append("name", "name");
    formData.append("counter", 1);

    // Details of the uploaded file
    console.log(selectedFile, "selected filejjj");
    let payload = {
      date: "date",
      name: "name",
      counter: 2,
      file: selectedFile,
    };

    // Request made to the backend api
    // Send formData object
    axios.post("http://localhost:8084/changeReport/single_download", formData);
  };
  return (
    <div className="App">
      <div>
        <h1>Daily report cheat</h1>
        <h3></h3>
        <div>
          <input type="file" onChange={onFileChange} />
          <button onClick={onFileUpload}>Upload!</button>
        </div>
        {/* {this.fileData()} */}
      </div>
    </div>
  );
}

export default App;

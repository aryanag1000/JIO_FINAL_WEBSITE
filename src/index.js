import React from "react";
import ReactDOM from "react-dom";
import MagicDropzone from "react-magic-dropzone";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import * as mobilenet from "@tensorflow-models/mobilenet";
import "@tensorflow/tfjs";
import "./styles.css";
import Title from "./Title";
import App1 from "./App1";
import App2 from "./App2";

import Footer from "./Footer.js";

const rootElement = document.getElementById("root");

ReactDOM.render(<Title />, document.getElementById("title"));

ReactDOM.render(<Footer />, document.getElementById("deve"));

class App extends React.Component {
  state = {
    model: null,
    preview: "",
    predictions: []
  };

  componentDidMount() {
    mobilenet.load().then((model) => {
      this.setState({
        model: model
      });
    });
  }

  onDrop = (accepted, rejected, links) => {
    this.setState({ preview: accepted[0].preview || links[0] });
  };

  onImageChange = (e) => {
    this.state.model.classify(e.target).then((predictions) => {
      this.setState({ predictions: predictions });
    });
  };
  handleHello = (e) => {
    document.getElementById("textDropdown").value = "input image";
    document.getElementById("dropdown").innerHTML =
      "Paste your input image here";
    ReactDOM.render(<App2 />, document.getElementById("root2"));
  };
  handleAnother = (e) => {
    document.getElementById("textDropdown").value = "paste your text";
    document.getElementById("dropdown").innerHTML =
      "Paste your input text here";
    ReactDOM.render(<App1 />, document.getElementById("root1"));
  };
  render() {
    return (
      <div className="Dropzone-page">
        <div className="input-group mb-3">
          <input
            id="textDropdown"
            type="text"
            className="form-control dropdown-toggle"
            placeholder="Input format"
            aria-label="Input format"
            aria-describedby="basic-addon1"
            data-bs-toggle="dropdown"
          />
          <ul className="dropdown-menu scrollable-menu" role="menu">
            <li className="dropdown-item" onClick={this.handleHello}>
              {" "}
              image input
            </li>
            <li className="dropdown-item" onClick={this.handleAnother}>
              {" "}
              text input
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, rootElement);

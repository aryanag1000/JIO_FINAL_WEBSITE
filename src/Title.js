import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import tts from "./JIO_ICON.png";
function Title() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark">
        <a class="navbar-brand" href="">
          <img src={tts} className="img3" alt="" />
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
        >
          <span class="navbar-toggler-icon"></span>
          <input
            type="button"
            onClick="document.getElementById('deve').scrollIntoView();"
          />
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item ">
              <a class="nav-link home " href="#footer">
                Home
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link contact" href="#contact">
                Contact
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link developers" href="#deve">
                Developers
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-10">
            <h1 class="big-heading">
              To Display Audio/Image as Output depending upon Input as
              Text/Image
            </h1>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
export default Title;

import React, { Component } from "react";
import Button from "elements/Button";
import "./index.scss";
import { Link } from "react-router-dom";

import Foto1 from "./asset/personal.svg";

export default function ContentAngga(props) {
  let LebarFoto = "657";
  let TinggiFoto = "730";
  let Paragraf =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
  return (
    <div className="div-body ">
      <h1 className="text-white">
        <br></br>
      </h1>

      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Angga</h4>
          <p className="card-text">{Paragraf}</p>
          <Button type="link" href="/Test" className="btn btn-danger">
            Test Page
          </Button>
        </div>

        <img
          className="card-img-bottom"
          alt="ini foto background"
          src={Foto1}
          width={LebarFoto + "px"}
          height={TinggiFoto + "px"}
        ></img>
      </div>

      {/*bottom content*/}
    </div>
  );
}

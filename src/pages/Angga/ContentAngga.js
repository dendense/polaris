import React, { Component } from "react";
import Button from "elements/Button";

import Foto1 from "./asset/image1.jpg";

export default function ContentAngga(props) {
  let LebarFoto = "300";
  return (
    <div className="div-body ">
      <h1 className="text-white">BODY</h1>
      <div className="card" style={{ width: "400px" }}>
        <div className="card-body">
          <h4 className="card-title">Angga</h4>
          <p className="card-text">Contoh teks untuk card.</p>
          <Button type="link" href="/test" className="btn btn-danger">
            See Profile
          </Button>
        </div>

        <img
          className="card-img-bottom"
          alt="ini foto background"
          src={Foto1}
          width={LebarFoto + "px"}
        ></img>
      </div>
      <div className="konten-bottom">
        <span>Back to Top </span>
        <a className="btn btn-primary" href="#top">
          Click Here
        </a>
      </div>
    </div>
  );
}

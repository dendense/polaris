import React, { Component } from "react";
import Button from "elements/Button";
import "./index.scss";

export default function HeaderAngga(props) {
  return (
    <div className="div-head d-flex" id="top">
      {/*HEADER*/}
      <div className="mr-3">
        <h3>{props.judulHeader}</h3>
      </div>

      <div className="mr-3">
        <Button type="link" className="btn btn-warning" href="/tenot">
          About
        </Button>
      </div>
      <div className="mr-3">
        <Button type="link" className="btn btn-warning" href="/tenot">
          Contact
        </Button>
      </div>
      <div className="mr-3">
        <Button type="link" className="btn btn-warning" href="/tenot">
          Blog
        </Button>
      </div>
    </div>
  );
}

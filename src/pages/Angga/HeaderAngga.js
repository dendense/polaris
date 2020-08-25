import React, { Component } from "react";
import Button from "elements/Button";

export default function HeaderAngga(props) {
  return (
    <div className="div-head d-flex" id="top">
      {/*HEADER*/}
      <h1>{props.judulHeader}</h1>
      <div className="">
        <Button type="link" className="btn btn-warning mr-3" href="/tenot">
          Sign Up
        </Button>
      </div>
    </div>
  );
}

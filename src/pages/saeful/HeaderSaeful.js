import React from "react";
import Button from "elements/Button";
import fotopertama from "./po.jpg";

export default function HeaderSaeful(props) {
  return (
    <div className="div-side bg-blue">
      <h1> {props.judulheader} </h1>
    </div>
  );
}

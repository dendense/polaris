import React from "react";
import Button from "elements/Button";
import fotopertama from "./po.jpg";

export default function SidebarSaeful(props) {
  return (
    <div className="div-side bg-blue">
      <img src={props.foto} alt="foto ujang nyemprot" width="200px"></img>
    </div>
  );
}

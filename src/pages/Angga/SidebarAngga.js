import React, { Component } from "react";
import Button from "elements/Button";
import Foto2 from "./asset/gradient.png";

export default function SidebarAngga(props) {
  let lebarFoto = "200";
  return (
    <div className="konten-side bg-dark text-white fixed-top">
      <div className="div-side content-center">
        {/*Isi Sidebar*/}

        <div className="card-img">
          <img src={Foto2} alt="foto" width={lebarFoto + "px"}></img>
        </div>
      </div>
    </div>
  );
}

import React, { Component } from "react";

import Button from "elements/Button";
import "./index.scss";
export default class ComponentAngga extends Component {
  render() {
    return (
      <>
        {/* Saat menemukan kasus halaman custom, developer wajib mengetahui apa saja komponen didalamnya, dari koding yg dikerjakan, jika untuk menyusun sesuai dengan posisi pada mockup, mungkin akan cukup, tetapi di sisi lain, ada beberapa property yang tidak dapat di kompromi seperti halnya fixed atau static property. Saat membuat halaman menggunakan grid sistem pada bootstrap dan ternyata kita tidak memperhitungkan parent serta child tag, maka akan terjadi collision atau kesalahan saat mengimplementasikan desain tersebut */}
        {/* <div className="container-fluid bg-dark">
          <div className="row content">
            <div className="col-sm-2 text-white align-self-center">
              <center>
                <h1 className="align-self-center">SIDEBAR</h1>
              </center>
            </div>

            <div className="col-sm-10 bg-white align-self-center">
              <center>
                <h1>HEADER</h1>
              </center>

              <div className=" bg-light align-self-center">
                <center>
                  <h1>KONTEN</h1>
                </center>
              </div>
            </div>
          </div>
        </div> */}
        <div className="container-fluid d-flex" id="fullscreen">
          <div className="konten-side bg-dark text-white fixed-top">
            <div className="div-side">
              <h1>SIDEBAR</h1>
            </div>
          </div>
          <div className="container-fluid konten-body" id="fullscreen-sm">
            <div className="div-head" id="top">
              <h1>HEADER</h1>
            </div>
            <div className="div-body text-white">
              <h1>BODY</h1>
              <div className="konten-bottom">
                <span>Back to Top </span>
                <a className="btn btn-primary" href="#top">
                  Click Here
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

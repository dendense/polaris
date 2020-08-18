import React, { Component } from "react";

export default class ComponentAngga extends Component {
  render() {
    return (
      <div className="container-fluid bg-dark">
        <div className="row content">
          <div className="col-sm-3 text-white align-self-center">
            <center>
              <h1 className="align-self-center">SIDEBAR</h1>
            </center>
          </div>

          <div className="col-sm-9 bg-white align-self-center">
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
      </div>
    );
  }
}

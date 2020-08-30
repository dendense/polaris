import React, { Component } from "react";
import "./Test.scss";

export default class Test extends Component {
  render() {
    return (
      <div className="container-fluid d-flex bg-color-dark" id="fullscreen">
        <div className="col-md-12">
          <div className="container-fluid content-body" id="fullscreen-sm">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
              >
                <span class="navbar-toggler-icon"></span>
              </button>{" "}
              <a class="navbar-brand" href="#">
                Brand
              </a>
              <div
                class="collapse navbar-collapse"
                id="bs-example-navbar-collapse-1"
              >
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link hover-underline-animation" href="#">
                      About <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link hover-underline-animation" href="#">
                      Contact
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link hover-underline-animation" href="#">
                      Blog
                    </a>
                  </li>
                </ul>

                <ul class="navbar-nav ml-md-auto">
                  <li class="nav-item active">
                    <form class="form-inline">
                      <input class="form-control mr-sm-2" type="text" />
                      <button
                        class="btn btn-primary my-2 my-sm-0"
                        type="submit"
                      >
                        Cari
                      </button>
                    </form>
                  </li>
                </ul>
              </div>
            </nav>

            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Angga</h4>
                <p className="card-text">ini contoh paragraf</p>
                <button className="animated-border-button">Submit</button>
              </div>
            </div>

            <div class="card">
              <h5 class="card-header">Card title</h5>
              <div class="card-body">
                <div class="card-text">
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    Launch demo modal
                  </button>
                </div>
              </div>
              <div className="card-footer">Card footer</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class DenyComponent extends Component {
  render() {
    return (
      <div className="container-fluid d-flex timeline-deny" id="fullscreen">
        <div className="konten-kiri fixed-top">
          <div className="konten-sidebar">
            <p>Ini Sidebar</p>
          </div>
        </div>
        <div className="container-fluid konten-kanan" id="fullscreen-sm">
          <div className="konten-header" id="top">
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
              <a
                className="navbar-brand text-white"
                href="http://gg.gg/lhzgf"
                target="_blank"
              >
                Jawer Baseuh
              </a>
              <ul className="navbar-nav mr-auto">
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">
                    Home <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0">
                <input
                  class="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  class="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </nav>
          </div>
          <div className="konten-isi">
            <div className="card-group">
              <div class="card" style={{ width: "18rem" }}>
                <img src="/images/posts/1.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src="/images/posts/2.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
              <div class="card" style={{ width: "18rem" }}>
                <img src="/images/posts/1.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

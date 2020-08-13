import React from "react";

import Button from "elements/Button";
import "./index.scss";

export default function Main(props) {
  return (
    <div className="container-fluid">
      <div className="timeline-grid">
        <div className="card">
          <img
            src="/images/posts/1.jpg"
            className="card-img-top"
            alt="Foto Bandung"
          />
          <div className="card-body">
            <h5 className="card-title">Card Title</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
              excepturi?
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last Update 3 mins ago</small>
          </div>
        </div>
        <div className="card">
          <img
            src="/images/posts/1.jpg"
            className="card-img-top"
            alt="Foto Bandung"
          />
          <div className="card-body">
            <h5 className="card-title">Card Title</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
              excepturi?
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last Update 3 mins ago</small>
          </div>
        </div>
        <div className="card">
          <img
            src="/images/posts/1.jpg"
            className="card-img-top"
            alt="Foto Bandung"
          />
          <div className="card-body">
            <h5 className="card-title">Card Title</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
              excepturi?
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last Update 3 mins ago</small>
          </div>
        </div>
        <div className="card">
          <img
            src="/images/posts/1.jpg"
            className="card-img-top"
            alt="Foto Bandung"
          />
          <div className="card-body">
            <h5 className="card-title">Card Title</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
              excepturi?
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last Update 3 mins ago</small>
          </div>
        </div>
      </div>
    </div>
  );
}

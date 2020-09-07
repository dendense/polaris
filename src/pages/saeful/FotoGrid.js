import React from "react";
import Button from "elements/Button";

const FotoGrid = (props, data) => {
  return (
    <div className="container mt-5 ml-3">
      <div className="row">
        <div className="card" style={{ width: "18rem", marginRight: "1rem" }}>
          <img src={props.imageGrid} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem", marginRight: "1rem" }}>
          <img src={props.imageGrid} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FotoGrid;

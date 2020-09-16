import React from "react";
import Button from "elements/Button";
import { bottom } from "@popperjs/core";

const FotoGrid = (props, data) => {
  return (
    <div className="container mt-5 ml-3">
      <div className="row">
        {props.data.map((i) => {
          return (
            <div
              className="card"
              style={{ width: "18rem", marginRight: "1rem" }}
            >
              <img
                src={i.imagePost}
                className="card-img-top"
                style={{ objectFit: "cover", height: "15rem" }}
                alt={i.altpost}
              />

              <div className="card-body">
                <h5 className="card-tit">{i.judulpost}</h5>
                <p>
                  post by{" "}
                  <strong>
                    <Button type="link">{i.UserName}</Button>
                  </strong>
                </p>
                <p className="card-text">
                  {i.deskripsipost}
                  <p></p>
                  <p>Date : {i.datePost}</p>
                  <p>
                    {i.countLike}Like| {i.countComments}Comment
                  </p>
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FotoGrid;

import React from "react";
import Button from "elements/Button";

const FotoGrid = (props) => {
  return (
    <div className="container mt-5">
      <div className="row">
        {props.data.map((i, index) => {
          return (
            <div
              key={`${index}`}
              className="card"
              style={{ width: "18rem", marginRight: "1rem" }}
            >
              <img
                src={i.imagePost}
                className="card-img-top"
                style={{ objectFit: "cover", height: "15rem" }}
                alt={i.altPost}
              />
              <div className="card-body">
                <h5 className="card-title">{i.judulPost}</h5>
                <p style={{ marginBottom: "1rem" }}>
                  Posted by{" "}
                  <strong>
                    <Button type="link" href="#">
                      {i.userName}
                    </Button>
                  </strong>
                </p>
                <p className="card-text">{i.deskripsiPost}</p>
                <p style={{ marginTop: "1rem" }}>
                  Date : {i.datePost}
                  <br /> {i.countComments} Comments | {i.countComments} Likes
                </p>
                <a href="/test-page" className="btn btn-primary">
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

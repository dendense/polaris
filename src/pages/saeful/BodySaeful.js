import React from "react";
import FotoGrid from "./FotoGrid";
import image1 from "assets/images/1.jpg";

export default function BodySaeful(props) {
  return (
    <div className="div-body m-3">
      <h1>BODY</h1>
      <FotoGrid data={props.data} />
      <div className="konten-bottom">
        <span>Back to Top </span>
        <a className="btn btn-primary" href="#top">
          Click Here
        </a>
      </div>
    </div>
  );
}

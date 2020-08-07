import React from "react";

export default function FrontGrid(props) {
  return (
    <div className="grid-area">
      {props.data.map((homepict, index) => {
        return (
          <div key={`${index}`} className={"img-wrapper" + homepict.grid}>
            <img
              src={homepict.imgUrl}
              alt={homepict.alt}
              className="img-cover"
            />
          </div>
        );
      })}
    </div>
  );
}

import React from "react";

export default function FrontGrid(props) {
  return (
    <div className="grid-area">
      {props.data.map((ikhsan, index) => {
        return (
          <div key={`${index}`} className={"img-wrapper" + ikhsan.grid}>
            <img src={ikhsan.imgUrl} alt={ikhsan.alt} className="img-cover" />
          </div>
        );
      })}
    </div>
  );
}

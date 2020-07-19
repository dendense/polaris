import React from "react";
import Button from "elements/Button";
import data from 'json/homeData';

export default function FrontGrid(props) {
  return (
    <section className="main-front">
      <div className="container-flex">
        <div className="grid-area border">
          {
            data.homePict.map((homepict, index) => {
              return (
                <>
                  <div className={homepict.grid}>
                    <img src={homepict.imgUrl} alt={homepict.alt} className="img-cover" />
                  </div>
                </>
              );
            })
          }
        </div>
      </div>
    </section>
  );
}

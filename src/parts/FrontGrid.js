import React from "react";
import Button from "elements/Button";
import data from 'json/homeData';

export default function FrontGrid(props) {
  return (
    <div className="grid-container">
      <section className="cols grid-area">
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
      </section>
    </div>
  );
}

import React from "react";
import Button from "elements/Button";

export default function FrontGrid(props) {
  return (
    <section className="container-flex">
      <div className="container-grid">
        {
          props.data.map((item, index) => {
            return(
              <div class={`item column-2${index === 0 ? " row-2" : " row-1"}`}>
                <div class="card card-featured">
                  <div class="img-wrapper">
                    <img src={item.imageUrl} alt={item.name} className="img-cover"/>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  );
}

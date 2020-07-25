import React from "react";
import Button from "elements/Button";
import IconText from './IconText.js';

export default function FrontGrid(props) {
  return (
    <>
      <section className="login-container">
        <div className="log-btn">
          <Button
            type="link"
            className="btn btn-primary text-white"
            href={`/properties/`}
          >
            Log In / Sign Up
            </Button>
        </div>
      </section>
      <section className="faq-container">
        <div className="faq-btn">
          <Button
            type="link"
            className="btn btn-warning text-black"
            href={`/properties/`}
          >
            Terms &amp; Conditions
            </Button>
        </div>
      </section>
      <section className="icon-container">
        <div className="icon-btn">
          <IconText />
        </div>
      </section>
      <div className="grid-area">
        {
          props.data.map((homepict, index) => {
            return (
              <div key={`${index}`} className={"img-wrapper" + homepict.grid}>
                <img src={homepict.imgUrl} alt={homepict.alt} className="img-cover" />
              </div>
            )
          })
        }
      </div>
    </>
  );
}

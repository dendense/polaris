import React from "react";
import Button from "elements/Button";
import data from 'json/homeData';
import IconText from './IconText.js'
import pict1 from 'assets/images/12.jpg';
import pict2 from 'assets/images/14.jpg';
import pict3 from 'assets/images/13.jpg';
import pict4 from 'assets/images/1.jpg';
import pict5 from 'assets/images/11.jpg';
import pict6 from 'assets/images/7.jpg';
import pict7 from 'assets/images/2.jpg';

export default function FrontGrid(props) {
  return (
    <div class="grid-area">
      <div class="img-wrapper grid-1"><img src={pict3} alt="Polaris" className="img-cover"/></div>
      <div class="img-wrapper grid-2"><img src={pict2} alt="Polaris" className="img-cover"/></div>
      <div class="img-wrapper grid-2"><img src={pict1} alt="Polaris" className="img-cover"/></div>
      <div class="img-wrapper grid-3"><img src={pict5} alt="Polaris" className="img-cover"/></div>
      <div class="img-wrapper grid-4"><div class="text-hero"><IconText/></div></div>
      <div class="img-wrapper grid-2"><img src={pict7} alt="Polaris" className="img-cover"/></div>
      <div class="img-wrapper grid-2"><img src={pict4} alt="Polaris" className="img-cover"/></div>
      <div class="img-wrapper grid-2"><img src={pict6} alt="Polaris" className="img-cover"/></div>
      <div class="img-wrapper grid-5"><img src={pict3} alt="Polaris" className="img-cover"/></div>
    </div>
  );
}

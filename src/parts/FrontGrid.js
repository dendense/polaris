import React from "react";
import Button from "elements/Button";
import data from 'json/homeData';
import pict1 from 'assets/images/12.jpg';
import pict2 from 'assets/images/14.jpg';
import pict3 from 'assets/images/13.jpg';
import pict4 from 'assets/images/10.jpg';
import pict5 from 'assets/images/11.jpg';

export default function FrontGrid(props) {
  return (
    <div class="grid-area">
      <div class="grd grid-1"><img src={pict3} alt="polaris" className="img-cover"/></div>
      <div class="grd grid-2"><img src={pict2} alt="polaris" className="img-cover"/></div>
      <div class="grd grid-2"><img src={pict1} alt="polaris" className="img-cover"/></div>
      <div class="grd grid-3"><img src={pict5} alt="polaris" className="img-cover"/></div>
      <div class="grid-4"><div class="text-hero"><span>POLARIS</span></div></div>
      <div class="grd grid-2"><img src={pict5} alt="polaris" className="img-cover"/></div>
      <div class="grd grid-2"><img src={pict5} alt="polaris" className="img-cover"/></div>
      <div class="grd grid-2"><img src={pict5} alt="polaris" className="img-cover"/></div>
      <div class="grd grid-5"><img src={pict3} alt="polaris" className="img-cover"/></div>
    </div>
  );
}

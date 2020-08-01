import React, { Component } from "react";
import "./PageDeny.scss";

export default class PageDeny extends Component {
  render() {
    let userName = <>Dafa</>;
    return (
      <>
        <div className="container">
          <div className="header">
            <h1>Selamat Datang {userName} </h1>
          </div>
          <div className="main d-flex">
            <div className="kanan border p-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                fuga exercitationem doloribus neque placeat ratione quam dolorum
                dolor, quos, eum aperiam accusamus aliquid sapiente a itaque?
                Officia incidunt magnam in repudiandae sapiente ratione tenetur
                impedit porro, fugiat, officiis id necessitatibus optio
                cupiditate voluptatem! Quasi asperiores voluptates dolorem eaque
                quas sint!
              </p>
            </div>
            <div className="kiri border p-3">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
                autem deleniti libero, doloribus culpa minus obcaecati rem
                suscipit ducimus ad saepe animi laudantium alias corrupti
                inventore cupiditate laborum totam odio, a at unde recusandae,
                quae illo odit? Possimus explicabo qui saepe fugit. Libero
                doloremque obcaecati laudantium molestiae error expedita soluta
                beatae! Illo, quo? Architecto voluptates saepe error sed id non
                consequuntur officia qui quo molestiae neque quis officiis
                impedit quam, fugit dolor autem ut tempora! Enim nobis mollitia
                soluta porro dolorem possimus itaque, corrupti assumenda facere
                unde voluptatibus sit quod?
              </p>
            </div>
          </div>
          <div className="footer">
            <span>Copyright 2020 Polaris</span>
          </div>
        </div>
      </>
    );
  }
}

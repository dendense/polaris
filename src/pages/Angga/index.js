import React, { Component } from "react";
import HeaderAngga from "./HeaderAngga";
import SidebarAngga from "./SidebarAngga";
import ContentAngga from "./ContentAngga";

import Button from "elements/Button";
import "./index.scss";
export default class ComponentAngga extends Component {
  render() {
    return (
      <>
        {/* Saat menemukan kasus halaman custom, developer wajib mengetahui apa saja komponen didalamnya, dari koding yg dikerjakan, jika untuk menyusun sesuai dengan posisi pada mockup, mungkin akan cukup, tetapi di sisi lain, ada beberapa property yang tidak dapat di kompromi seperti halnya fixed atau static property. Saat membuat halaman menggunakan grid sistem pada bootstrap dan ternyata kita tidak memperhitungkan parent serta child tag, maka akan terjadi collision atau kesalahan saat mengimplementasikan desain tersebut */}

        {/*disni sidebar*/}
        <div className="container-fluid d-flex" id="fullscreen">
          <div className="konten-side bg-dark text-white fixed-top">
            {/*disni dipanggil sidebar*/}
            <SidebarAngga />
          </div>

          {/*disini header*/}
          <div className="container-fluid konten-body" id="fullscreen-sm">
            {/*disini dipanggil header*/}
            <HeaderAngga judulHeader="Angzai's website" />

            {/*disini dipanggil content*/}
            <ContentAngga />
          </div>
        </div>
      </>
    );
  }
}

import React from "react";
import Masonry from "react-masonry-css";

import Button from "elements/Button";
import "./index.scss";

export default function Main({ data }) {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <div className="masonry-flex">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        <div>This is Content</div>
      </Masonry>
    </div>
  );
}

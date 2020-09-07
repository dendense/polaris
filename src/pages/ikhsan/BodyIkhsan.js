import React from "react";
import FotoGrid from "./FotoGrid";

import image1 from "./12.jpg";

export default function BodyIkhsan(props) {
  return (
    <div className="div-body">
      <FotoGrid imageGrid={image1} />
    </div>
  );
}

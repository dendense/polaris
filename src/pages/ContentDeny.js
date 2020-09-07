import React from "react";
import FotoGrid from "./TestBlank";

import image1 from "assets/images/1.jpg";

export default function ContentDeny(props) {
  return (
    <div className="konten-isi">
      <FotoGrid imageGrid={image1} />
    </div>
  );
}

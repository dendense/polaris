import React from "react";
import FotoGrid from "./TestBlank";

export default function ContentDeny(props) {
  return (
    <div className="konten-isi">
      <FotoGrid data={props.data} />
    </div>
  );
}

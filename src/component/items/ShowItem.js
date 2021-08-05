import React from "react";
import NewShowForm from "../forms/NewShowForm";

function ShowItem(props) {
  const { show } = props;
  return (
    <div>
      {show.name}
      <br />
      {show.season}
      <br />
      {show.episode}
      <br />
      {show.timestamp}
      <br />
      <br />
    </div>
  );
}

export default ShowItem;

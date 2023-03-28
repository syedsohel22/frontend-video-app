import React from "react";

const Card = ({ name, link }) => {
  return (
    <div>
      <p>{name}</p>
      <p>{link}</p>
      <video width="320" height="240" controls>
        <source src={link} type="video/mp4" />
        <source src={link} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>
  );
};

export default Card;

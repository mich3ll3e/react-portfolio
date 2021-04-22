import React from "react";

const Card = ({ title, image, href, alt }) => {
  return (
    <a href={href}>
      <div className="pic m-3">
        <img src={image} alt={alt} height="200px" />
        <div className="caption p-3">{title}</div>
      </div>
    </a>
  );
}

export default Card;
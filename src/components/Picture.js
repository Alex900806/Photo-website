import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <p className="photographerName">{data.photographer}</p>
      <div className="imageContainer">
        <img src={data.src.large} alt="wait a minute..." />
      </div>

      <p>
        Download Image:{" "}
        <a target="_blank" href={data.src.large} rel="noreferrer">
          Click Here
        </a>
      </p>
    </div>
  );
};

export default Picture;

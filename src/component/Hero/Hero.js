import React from "react";

const Hero = ({ title, desc, img }) => {
  return (
    <div
      className="text-white d-flex align-items-center"
      style={{
        background: `linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('${img}') center center/cover`,
        padding: "6em 0",
        minHeight: "50vh",
      }}
    >
      <div className="container px-5">
        <h1 className="display-3">{title}</h1>
        <p className="lead">{desc}</p>
      </div>
    </div>
  );
};

export default Hero;

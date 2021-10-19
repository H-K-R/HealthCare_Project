import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service, index }) => {
  return (
    <div className="card">
      <img src={service.cover} className="card-img-top" alt={service.title} />
      <div className="card-body">
        <h5 className="card-title">{service.title}</h5>
        <p className="card-text">{service.discription}</p>
        <Link to={`/services/${index}`} className="btn btn-primary">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;

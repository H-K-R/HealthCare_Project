import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useService from "../../hooks/useService";

const SingleService = () => {
  const { index } = useParams();
  const [service, setSerice] = useState({});

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setSerice(data[index]);
      });
  }, []);

  return (
    <div>
      <div className="container py-4">
        <img src={service.cover} className="img-fluid" alt="" />
        <h1>{service.title}</h1>
        <p className="lead">{service.discription}</p>
      </div>
    </div>
  );
};

export default SingleService;

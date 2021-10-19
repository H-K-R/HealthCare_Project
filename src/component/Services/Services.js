import React from "react";
import useService from "../../hooks/useService";
import Hero from "../Hero/Hero";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const { services } = useService();
  return (
    <div className="container">
      <Hero
        title="Our Services"
        desc="Keep Your Body Fit & Strong. Kick your feet up! With a gym designed
          around you, we think you’ll love it here."
        img="http://gofit.themerex.net/wp-content/uploads/2016/07/image-4.jpg"
      />
      <div className="row my-2">
        {services.map((serv, i) => (
          <div className="col-md-4" key={i}>
            <ServiceCard service={serv} index={i} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

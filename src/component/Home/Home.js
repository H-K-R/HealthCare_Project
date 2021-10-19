import React from "react";
import useService from "../../hooks/useService";
import Hero from "../Hero/Hero";
import ServiceCard from "../ServiceCard/ServiceCard";

const Home = () => {
  const { services } = useService();

  return (
    <div>
      <Hero
        title="Zyymm"
        desc="Keep Your Body Fit & Strong. Kick your feet up! With a gym designed
          around you, we think you’ll love it here."
        img="http://gofit.themerex.net/wp-content/uploads/2016/07/image-4.jpg"
      />

      <div className="container py-5">
        <h2 className="h1 text-center">Our Offers</h2>
        <p className="lead mb-3 text-center">Train Like you never did before</p>
        <div className="row">
          {services.map((serv, i) => (
            <div className="col-md-4" key={i}>
              <ServiceCard service={serv} index={i} />
            </div>
          ))}
        </div>
      </div>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                className="img-fluid rounded"
                src="https://preview.colorlib.com/theme/crossfits/images/img_1.jpg.webp"
                alt="The Club"
              />
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div>
                <h2>The Club</h2>
                <p>
                  Keep Your Body Fit & Strong. Kick your feet up! With a gym
                  designed around you, we think you’ll love it here. with
                  personal training, the focus is you. We design a program
                  specific to your health and fitness goal and work with you to
                  achieve them
                </p>
                <p>
                  Training Express is a trusted name for a wide range of
                  compliance trainings for certification. We provide
                  professional, reliable, audiovisual training to.Weightlifting
                  is a weight class sport so athletes strive to balance maximum
                  power and strength development with the maintenance of an
                  ideal body composition.At Raw Fitness, we sweat and have fun
                  doing it. <br /> Our 60 minute bootcamp training sessions led
                  by top certified personal trainers will help you get your
                  cardio.Bodycombat is a fitness class that uses a combination
                  of different martial arts to give you a superb workout. From
                  the Les Mills studio, it's fast-paced
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-danger py-5 container text-center rounded mb-4">
        <h2 className="text-white">Sign up For Newsletter</h2>
        <div className="d-flex justify-content-center mt-4">
          <input
            type="text"
            className="form-control w-50"
            placeholder="Enter Your Email"
          />
          <button className="btn btn-info">Submit</button>
        </div>
      </section>
    </div>
  );
};

export default Home;

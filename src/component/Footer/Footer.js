import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-white">
            <h2>Zyymm | Exercise and Keep Healthy</h2>
            <p>
              It all began with Joe Gold during the glory days of "Muscle Beach"
              in Venice, CA. Joe helped to build the connection between fitness
              and Hollywood, and blazed a trail followed later by Arnold
              Schwarzenegger, Lou Ferrigno, and more. His spirit of seriously
              fun fitness lives on today through World Gym.
            </p>
          </div>
          <div className="col-md-3">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="text-white nav-link" exact to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="text-white nav-link" exact to="/services">
                  Services
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="text-white nav-link"
                  exact
                  to="/bodybuilding"
                >
                  Body Building
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="text-white nav-link" exact to="/pricing">
                  Pricing
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-secondary m-0">
          Copyright 2021 | All Right Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

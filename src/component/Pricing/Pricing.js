import React from "react";

const Pricing = () => {
  return (
    <div className="container py-5">
      <h2 className="h1 mb-4">Our Packages & Pricing</h2>
      <div className="row mb-3 text-center">
        <div className="col-md-4">
          <div className="card mb-4 box-shadow">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Running Classes</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $49 <small className="text-muted">/ mo</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Regular Exercise</li>
                <li>Training on the go</li>
                <li>Body Building Packages</li>
              </ul>
              <button
                type="button"
                className="btn btn-lg btn-block btn-outline-primary"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 box-shadow">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">
                Weight Lifting Classes
              </h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $99 <small className="text-muted">/ mo</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Regular Exercise</li>
                <li>Training on the go</li>
                <li>Body Building Packages</li>
              </ul>
              <button
                type="button"
                className="btn btn-lg btn-block btn-outline-primary"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4 box-shadow">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Body Building Classes</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $159 <small className="text-muted">/ mo</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Regular Exercise</li>
                <li>Training on the go</li>
                <li>Body Building Packages</li>
              </ul>
              <button
                type="button"
                className="btn btn-lg btn-block btn-outline-primary"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;

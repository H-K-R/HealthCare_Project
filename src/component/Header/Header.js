import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, signOutFunc } = useAuth();

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Zyymm
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  exact
                  to="/"
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  exact
                  to="/services"
                >
                  Services
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  exact
                  to="/bodybuilding"
                >
                  Body Building
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  exact
                  to="/pricing"
                >
                  Pricing
                </NavLink>
              </li>
              {user.email && (
                <li className="nav-item">
                  <p className="mb-0 nav-link">{user.email}</p>
                </li>
              )}
              {!user.email ? (
                <li className="nav-item">
                  <NavLink
                    className="btn btn-info"
                    activeClassName="active"
                    exact
                    to="/login"
                  >
                    Login
                  </NavLink>
                </li>
              ) : (
                <button onClick={signOutFunc} className="btn btn-info">
                  Log out
                </button>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

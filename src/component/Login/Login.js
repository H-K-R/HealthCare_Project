import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const {
    signInWithGoogle,
    registerWithEmailandPassword,
    loginWithEmailandPassword,
    user,
    error,
  } = useAuth();

  const history = useHistory();

  useEffect(() => {
    if (user.email) {
      history.push("/");
    }
  }, [user]);

  const [isLogin, setIsLogin] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();
    registerWithEmailandPassword(email, password);
    setEmail("");
    setPassword("");
  };

  const login = (e) => {
    e.preventDefault();
    loginWithEmailandPassword(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container py-5 login">
      <div>
        {isLogin ? (
          <form className=" mb-4" onSubmit={login}>
            <h4>Login with Email and Password</h4>
            <input
              type="email"
              placeholder="Email"
              className="form-control mb-3"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              placeholder="Password"
              className="form-control mb-3"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button className="btn btn-info">Login</button>
          </form>
        ) : (
          <form className=" mb-4" onSubmit={register}>
            <h4>Register with Email and Password</h4>
            <input
              type="email"
              placeholder="Email"
              className="form-control mb-3"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              type="password"
              placeholder="Password"
              className="form-control mb-3"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button className="btn btn-info">Register</button>
          </form>
        )}
        <div>{error && <p> {error} </p>}</div>
        <div>
          {isLogin && (
            <p className="btn" onClick={() => setIsLogin(false)}>
              Create New User
            </p>
          )}
          {!isLogin && (
            <p className="btn" onClick={() => setIsLogin(true)}>
              Already have an account?
            </p>
          )}
        </div>

        <button onClick={signInWithGoogle} className="btn bg-light shadow-sm">
          <i className="fab fa-google"></i> Sign in With Google
        </button>
      </div>
    </div>
  );
};

export default Login;

import { useEffect, useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Home from "./component/Home/Home";
import Services from "./component/Services/Services";
import BodyBuilding from "./component/BodyBuilding/BodyBuilding";
import Pricing from "./component/Pricing/Pricing";
import Login from "./component/Login/Login";
import SingleService from "./component/SingleService/SingleService";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import NotFound from "./component/NotFound/NotFound";
function App() {
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    setTimeout(setLoaded(false), 500);
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/services" exact>
            <Services />
          </Route>
          <PrivateRoute path="/services/:index" exact>
            <SingleService />
          </PrivateRoute>
          <PrivateRoute path="/bodybuilding" exact>
            <BodyBuilding />
          </PrivateRoute>
          <PrivateRoute path="/pricing" exact>
            <Pricing />
          </PrivateRoute>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

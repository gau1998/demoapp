import React from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Home from "./components/Home";
import { Redirect } from "react-router";
import login from "./Layout/Login";
import register from "./Layout/Register";
import forgetPassword from "./Layout/ForgetPassword";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ChangePassword from "./Layout/ChangePassword";
import Logic from "./components/Logic";

const PrivateRoute = ({ component: Component, ...props }) => {
  return (
    <Route
      {...props}
      render={(innerProps) =>
        localStorage.getItem("Token") ? (
          <Component {...innerProps} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

function App() {
  return (
    <Router>
      {localStorage.getItem("Token") && <Navbar />}
      <Switch>
        <Route exact path="/" component={login} />
        <Route path="/register" component={register} />
        <Route path="/forgetpassword" component={forgetPassword} />
        <Route path='/logic/' component={Logic}/>
        <PrivateRoute path="/changepassword/" component={ChangePassword} />
        <PrivateRoute path="/home/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;

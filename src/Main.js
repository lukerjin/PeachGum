import React, { Component } from "react";
import Search from "./Search";
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="topnav">
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          <Search />
          </div>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Main
import React, { Component } from "react";
import Search from "./Search";

import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import MobileNavContainer from "./MobileNavContainer";

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div className="topnav">

            <MobileNavContainer />

            <div className="mainNav">
             <NavLink exact to="/">Home</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>

          {/*<Search />*/}
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
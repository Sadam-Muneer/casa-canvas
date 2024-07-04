import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import HomeV1 from "./components/home-v1";
import About from "./components/about";
import Location from "./components/location";
import BlogGrid from "./components/blog-grid";
import BlogLeftSidebar from "./components/blog-left-sidebar";
import BlogRightSidebar from "./components/blog-right-sidebar";
import Blog from "./components/blog";
import Contact from "./components/contact";
import Cart from "./components/cart";
import MyAccount from "./components/my-account";
import Login from "./components/login";
import Register from "./components/register";

class Root extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
          <Switch>
            <Route exact path="/" component={HomeV1} />
            <Route path="/about" component={About} />
            <Route path="/location" component={Location} />
            <Route path="/blog-grid" component={BlogGrid} />
            <Route path="/blog-left-sidebar" component={BlogLeftSidebar} />
            <Route path="/blog-right-sidebar" component={BlogRightSidebar} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
            <Route path="/cart" component={Cart} />
            <Route path="/my-account" component={MyAccount} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}
export default Root;

ReactDOM.render(<Root />, document.getElementById("quarter"));

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Home from "./Home";
import DisplayMenus from "./displayMenus";
import Cart from "./Cart";
import SignIn from "./SignIn";
import Chefs from "./Chefs";
import Reviews from "./Reviews";
import ReviewEdit from "./ReviewEdit";

export default function Nav(props) {
  return (
    <Router>
      <div className="navbar sticky-top navbar-expand-md navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img src="images/logo3.png" alt="Main Logo"></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/menus">
                Menus
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/chefs">
                Chefs
              </a>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <section>
            <Link className="mx-3" to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
            <span> {props.totalQty} </span> items
            <Link className="mx-3" to="/reviews">Add Review</Link>
          </section>
        </div>
      </div>
      <Switch>
        <Route exact path="/">
          <Home menus={props.menus} />
        </Route>
        <Route exact path="/menus">
          <DisplayMenus
            menus={props.menus}
            increaseQty={props.increaseQty}
            decreaseQty={props.decreaseQty}
          />
        </Route>
        <Route exact path="/chefs">
          <Chefs/>
        </Route>
        <Route exact path="/cart">
          <Cart menus={props.menus} />
        </Route>
        <Route exact path="/signin">
          <SignIn/>
        </Route>
        <Route exact path="/reviews">
          <Reviews/>
        </Route>
        <Route
            path="/review/:id"
            exact={true}
            component={ReviewEdit}
          />
      </Switch>
    </Router>
  );
}

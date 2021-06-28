import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {chefs} from "./chefData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Chefs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: chefs,
    };
  }
  render() {
    const chefList = chefs.map((chef) => {
      return (
        <li className="w-25" key={chef._id}>
          <div>
            <img
              id="chefavatar"
              src={chef.chefavatar}
              alt={`$chef.chefname avatar`}
            />
            <h5>{chef.chefname}</h5>
            <p>{chef.chefspecialty}</p>
            <p>
              <FontAwesomeIcon icon={["fas", "star"]} /> {chef.chefratings}/5
            </p>
          </div>
        </li>
      );
    });
    return (
      <div className="container">
        <ul className="d-flex flex-row justify-content-center">{chefList}</ul>
      </div>
    );
  }
}
export default Chefs;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import DisplayMenus from "./displayMenus";
import HomeMenu from "./Menus";
// import TopOrderItems from "./TopOrderItems";

export default function Home(props) {
  return (
    <div className="home containter">
      <div>
        <section className="box m-5">
          <h5>Welcome to HomeChef - a Chef-to-Customer platform!</h5>
          <p>Our Chefs are certified home-chefs who prepare their food with love and care.</p>
        </section>
        <h5>Top Order Items:</h5>
        <HomeMenu menus={props.menus} />
      </div>
    </div>
  );
}

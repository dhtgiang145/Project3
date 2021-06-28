import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";

function DisplayMenus(props) {
  const { menus = [] } = props;
  const menuList = menus.map((menu) => {
    return (
      <li className="col-3" key={menu._id}>
        <div>
          <section className="listDisplay">
            <img id="menuimg" src={menu.image} alt={`$menu.title`} />
            <h5>{menu.title}</h5>
            <p>{menu.desc}</p>
            <p>${menu.price}</p>
            <p>
              <FontAwesomeIcon icon={["fas", "star"]} /> Ratings: {menu.ratings}/5
            </p>
          </section>
          <section className="listQty m-2">
            <div>
              <button onClick={() => props.decreaseQty(menu)}>
                <FontAwesomeIcon icon={faMinusCircle} />
              </button>
              <span className="box m-2">{menu.value}</span>
              <button onClick={() => props.increaseQty(menu)}>
                <FontAwesomeIcon icon={faPlusCircle} />
              </button>
            </div>
          </section>
        </div>
      </li>
    );
  });
  return (
    <div className="container">
      <ul className="row">{menuList}</ul>
    </div>
  );
}

export default DisplayMenus;

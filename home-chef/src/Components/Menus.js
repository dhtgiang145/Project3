import React from "react";

export default function HomeMenu(props) {
  const { menus = [] } = props;

  const listItems = menus
    .sort((a, b) => b.ordered - a.ordered)
    .slice(0, 6)
    .map((menu) => {
      return (
        <li key={menu._id} className="col-4">
          <section className="listItem">
            <p>
              {menu.title} <span>{menu.ratings}/5</span>
            </p>
            <img id = "menuimg" src={menu.image} alt={menu.desc}></img>
            <div>{menu.ordered} people ordered this item</div>
          </section>
        </li>
      );
    });
  return (
    <div className="container">
      <ul className="row">{listItems}</ul>
    </div>
  );
}

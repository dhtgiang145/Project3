import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Cart(props) {
  const { menus = [] } = props;
  const cartItems = menus.filter((menu) => menu.value > 0);
  const cartContent = !!cartItems.length ? (
    <div>
      <button className="btn bg-success my-3">
        <a href="/signin" className="text-white">
          Check Out
        </a>
      </button>
    </div>
  ) : (
    <div className="d-flex flex-column align-items-start">
      <h5 className="mx-5 py-1">There are 0 items in your cart</h5>
      <button className="btn bg-success mx-5">
        <a href="/menus" className="text-white">
          Continue Order
        </a>
      </button>
    </div>
  );
  return (
    <div className="block">
      <h4 className="mt-5">Your Cart Items</h4>
      {menus.map((menu) => {
        if (menu.value > 0) {
          return (
            <div className="border">
              <h6>{menu.title}</h6>
              <p className="px-4">{menu.desc}</p>
              <p className="qty mx-5 justify-content-center">
                Quantity: {menu.value}
              </p>
            </div>
          );
        } else {
          return null;
        }
      })}
      {cartContent}
    </div>
  );
}

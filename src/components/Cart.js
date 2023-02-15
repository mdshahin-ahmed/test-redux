import React from "react";
import { AiOutlineShoppingCart, AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  addToCart,
  removeToCart,
} from "../redux/actionCreators/productActionCreators";

const Cart = ({ product }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { image, model } = product;

  return (
    <div className="card mb-4">
      <img src={image} className="card-img-top" alt="..." />
      <div
        className="card-body"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h5 className="card-title">{model}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        {pathname === "/" || pathname === "/home" ? (
          <button
            onClick={() => dispatch(addToCart(product))}
            className="btn btn-primary mt-auto"
          >
            <AiOutlineShoppingCart className="me-1 " />
            <span>Add to cart</span>
          </button>
        ) : null}
        {pathname === "/cart" && (
          <button
            onClick={() => dispatch(removeToCart(product))}
            className="btn btn-danger mt-auto"
          >
            <AiOutlineDelete className="me-1 " />
            <span>Remove From cart</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;

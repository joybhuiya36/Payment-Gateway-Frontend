"use client";
import React, { useState } from "react";
import "./index.scss";
import { useDispatch } from "react-redux";
// import { increase, decrease } from "../../redux/slices/cartCountSlice";
// import { addToCart, removeToCart } from "../../redux/slices/bookCartSlice";

type Props = {
  _id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
  onRemove?: Function;
};
const CartForCartPage = ({
  title,
  price,
  image,
  quantity,
  onRemove,
}: Props) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(quantity);

  return (
    <div className="cart-for-cartpage">
      <div className="left">
        <img src={image} height={100} />
      </div>
      <div className="right">
        <h4>{title}</h4>
        <p>${price}</p>
        <div className="plusminus">
          {/* <button
            onClick={() => {
              dispatch(decrease());
              dispatch(removeToCart({ _id, price }));
              setCount(count - 1);
            }}
            disabled={count == 0}
          >
            -
          </button> */}
          Quantity: {count}
          {/* <button
            onClick={() => {
              dispatch(increase());
              setCount(count + 1);
              dispatch(
                addToCart({
                  _id,
                  title,
                  price,
                  image,
                })
              );
              setCount(count + 1);
            }}
          >
            +
          </button> */}
        </div>
      </div>
      {/* <span className="close" onClick={() => onRemove(_id, count, price)}>
        X
      </span> */}
    </div>
  );
};

export default CartForCartPage;

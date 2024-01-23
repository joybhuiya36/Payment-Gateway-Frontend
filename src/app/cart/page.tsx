"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "@/components/CartForCartPage/index";
import "./index.scss";
import axiosIntance from "../../utils/axiosInstance";
import { toast } from "react-toastify";
import {
  removeToCart,
  removeMany,
  clearCart,
} from "../../redux/slices/bookCartSlice";
import { decreaseMany, countZero } from "../../redux/slices/cartCountSlice";
import useCart from "@/customHooks/cartHooks";

const CartPage = () => {
  const { bookData, getCart, totalCost } = useCart();
  const userId = useSelector((state: any) => state.user.id);
  const dispatch = useDispatch();
  //   console.log(bookData);
  useEffect(() => {
    getCart(userId);
  }, [bookData]);
  const handleCheckout = () => {
    axiosIntance
      .post("/transaction/ssl-init", { userId: userId })
      .then((res) => {
        const url = res?.data?.GatewayPageURL;
        dispatch(clearCart(0));
        dispatch(countZero(0));
        window.location.replace(url);
      });
  };
  //   const handleFullRemove = (_id: any, quantity: number, price: number) => {
  //     // console.log(_id, quantity, price);
  //     dispatch(removeMany({ _id, price, quantity }));
  //     dispatch(decreaseMany(quantity));
  //   };
  return (
    <div>
      {bookData?.map((x: any) => (
        <Cart
          key={x.book._id}
          _id={x.book._id}
          title={x.book.title}
          price={x.book.price}
          image={x.book.image}
          quantity={x.quantity}
          //   onRemove={handleFullRemove}
        />
      ))}
      <h3 style={{ textAlign: "center", marginBottom: "1em" }}>
        Total: ${totalCost.toFixed(2)}
      </h3>
      <div className="checkoutbtn">
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;

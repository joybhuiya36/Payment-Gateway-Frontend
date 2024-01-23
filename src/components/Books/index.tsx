"use client";
import useBook from "@/customHooks/bookHook";
import React, { useEffect } from "react";
import BookCart from "../BookCart";
import "./index.scss";
import { useSelector } from "react-redux";
import axiosIntance from "@/utils/axiosInstance";
import { toast } from "react-toastify";

type Props = {};

const Books = (props: Props) => {
  const { books, getAllBook } = useBook();
  const userId = useSelector((state: any) => state.user.id);
  useEffect(() => {
    getAllBook();
  }, [books]);
  const addtoCart = (id: string) => {
    console.log(id);
    axiosIntance
      .post("/cart/addtocart", { bookId: id, quantity: 1 })
      .then((res) => {
        toast.success("Book is added to cart");
      })
      .catch((error) => {
        toast.error("Failed to add to cart");
      });
  };
  return (
    <div className="books">
      {books?.map((book: any) => (
        <BookCart
          key={book._id}
          id={book._id}
          title={book.title}
          author={book.author}
          price={book.price}
          image={book.image}
          addtoCart={addtoCart}
        />
      ))}
    </div>
  );
};

export default Books;

"use client";
import useBook from "@/customHooks/bookHook";
import React, { useEffect } from "react";
import BookCart from "../BookCart";
import "./index.scss";

type Props = {};

const Books = (props: Props) => {
  const { books, getAllBook } = useBook();
  useEffect(() => {
    getAllBook();
  }, [books]);
  const addtoCart = (id: string) => {
    console.log(id);
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

import React from "react";
import "./index.scss";

type Props = {
  id: string;
  title: string;
  author: string;
  price: number;
  image: string;
  addtoCart: Function;
};

const BookCart = ({ id, title, author, price, image, addtoCart }: Props) => {
  return (
    <div className="book-cart">
      <img src={image} alt="Image" className="book-cart__image" />
      <h3 className="book-cart__title">{title}</h3>
      <p className="book-cart__author">{author}</p>
      <p className="book-cart__price">${price}</p>
      <button className="book-cart__button" onClick={() => addtoCart(id)}>
        Add To Cart
      </button>
    </div>
  );
};

export default BookCart;

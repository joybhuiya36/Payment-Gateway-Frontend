"use client";
import Link from "next/link";
import React from "react";
import CartIcon from "../CartIcon";
import "./index.scss";
import { useRouter } from "next/navigation";

type Props = {};

const Navbar = (props: Props) => {
  const navigate = useRouter();

  return (
    <div className="nav">
      <Link href="/" className="nav__link">
        Home
      </Link>
      <Link href="/" className="nav__link">
        Books
      </Link>
      <Link href="/" className="nav__link">
        About Us
      </Link>
      <Link href="/" className="nav__link">
        Contact
      </Link>
      <div className="nav__right">
        <span onClick={() => navigate.push("/cart")}>
          <CartIcon />
        </span>
        <button className="nav__button">Login</button>
      </div>
    </div>
  );
};

export default Navbar;

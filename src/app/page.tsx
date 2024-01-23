"use client";
import Books from "@/components/Books";
import styles from "./page.module.scss";
import { useEffect } from "react";
import useCart from "@/customHooks/cartHooks";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  // const { bookData, getCart } = useCart();
  // const userId = useSelector((state: any) => state.user.id);
  // useEffect(() => {
  //   getCart(userId);
  //   console.log(bookData.length);
  // }, [bookData]);
  return (
    <main className={styles.main}>
      <ToastContainer />
      <Books />
    </main>
  );
}

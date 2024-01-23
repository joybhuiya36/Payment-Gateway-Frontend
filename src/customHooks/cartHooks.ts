import axiosIntance from "@/utils/axiosInstance";
import { error } from "console";
import { useState } from "react";

const useCart = () => {
  const [bookData, setBookData] = useState<any>([]);
  const [totalCost, setTotalCost] = useState<number>(0);
  const getCart = (userId: string) => {
    axiosIntance
      .get("/cart/view")
      .then((res) => {
        setBookData(res.data.data.books);
        setTotalCost(res.data.data.total);
      })
      .catch((error) => {
        setBookData([]);
        setTotalCost(0);
      });
  };
  return { bookData, getCart, totalCost };
};

export default useCart;

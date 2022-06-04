import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((r) => r.json())
      .then((d) => {
        setItem(d);
      });
  }, [id]);

  return (
    <div>
      <h1>Selected Product</h1>
      <h3>Product No:- {id}</h3>
      <h3>Product name:-{item.title}</h3>
      <h3>Brand:- {item.brand}</h3>
      <p>Price:- ${item.price}</p>
      <img src={item.thumbnail} alt="img" />
    </div>
  );
};

export default Product;

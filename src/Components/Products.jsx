import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
// import Product from "./Product";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchP = async () => {
      let r = await fetch(`https://dummyjson.com/products`);
      let d = await r.json();
      //   console.log(d.products);
      setData(d.products);
    };
    fetchP();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div>
        <div>
          {data.map((el) => (
            <div key={el.id}>
              <Link to={`/products/${el.id}`}>
                <h2>{el.title}</h2>
                {/* <p>{el.brand}</p>
                <p>{el.price}</p> */}
                {/* <Product /> */}
              </Link>
            </div>
          ))}
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Products;

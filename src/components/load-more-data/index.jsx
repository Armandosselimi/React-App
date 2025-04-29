import React, { useEffect, useState } from "react";
import "./styles.css";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);
  const [disabledButton, setDisabledButton] = useState(false);
  console.log(products.length);
  console.log(disabledButton);

  const fetchProducts = async (params) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await response.json();

      if (data && data.products && data.products.length) {
        setProducts((prevData) => [...prevData, ...data.products]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length >= 100) {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }
  }, [products]);

  if (loading) return <div>Loading...</div>;
  if (error !== null) return <div>An error occurred. {error}</div>;

  return (
    <div className='container'>
      <div className='product-container'>
        {products && products.length
          ? products.map((item) => (
              <div
                key={item.id}
                className='product'
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className='button-container'>
        <button
          disabled={disabledButton}
          onClick={() => setCount(count + 1)}
        >
          Load More Products
        </button>
        {disabledButton && <p>You have reached 100 items.</p>}
      </div>
    </div>
  );
}

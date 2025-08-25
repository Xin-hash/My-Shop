// src/pages/ProductsPage.jsx
import React, { useEffect, useState } from "react";
import { getProducts } from "../api/api";
import ProductCardHome from "../components/ProductCardHome";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getProducts();
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
      <h1 className="text-3xl font-bold text-center my-6">Welcome to Our Store</h1>
      <p className="text-center mb-6">Explore our range of products below!</p>
      </div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCardHome key={product._id} product={product} />
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
    </div>
    
  );
};

export default HomePage;

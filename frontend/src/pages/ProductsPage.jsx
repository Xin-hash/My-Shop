// src/pages/ProductsPage.jsx
import React, { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import ProductCard from "../components/ProductCard";

const ProductsPage = () => {
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
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default ProductsPage;

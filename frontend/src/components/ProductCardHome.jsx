// src/components/ProductCard.jsx
import React from "react";

export default function ProductCardHome({product}){
  return (
    <div className="border rounded p-4 shadow-md">
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-gray-600">Price: ${product.price}</p>
      <p className="text-gray-500">{product.description}</p>
    </div>
  );
};


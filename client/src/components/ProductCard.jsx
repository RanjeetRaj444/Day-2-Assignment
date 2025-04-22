import React from "react";

const ProductCard = ({ product, isFav, toggleFav }) => {
  return (
    <div className="border p-4 rounded shadow">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-cover mb-2"
      />
      <h2 className="font-semibold">{product.title}</h2>
      <p className="text-sm text-gray-600">${product.price.toFixed(2)}</p>
      <button
        className={`text-xl mt-2 ${isFav ? "text-red-500" : "text-gray-400"}`}
        onClick={() => toggleFav(product.id)}
      >
        ❤️
      </button>
    </div>
  );
};

export default ProductCard;

import React, { useMemo, useState } from "react";
import { useProducts } from "./hooks/useProducts";
import ProductCard from "./components/ProductCard";

function App() {
  const products = useProducts();
  const [favs, setFavs] = useState(() => {
    return JSON.parse(localStorage.getItem("productFavs")) || [];
  });

  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const toggleFav = (id) => {
    let updatedFavs = favs.includes(id)
      ? favs.filter((favId) => favId !== id)
      : [...favs, id];

    setFavs(updatedFavs);
    localStorage.setItem("productFavs", JSON.stringify(updatedFavs));
  };

  const filteredAndSorted = useMemo(() => {
    let filtered = products.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );

    if (sortOrder === "asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [products, search, sortOrder]);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">🛒 Products</h1>
        <div className="text-sm">❤️ {favs.length} favourites</div>
      </header>

      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search products..."
          className="border p-2 flex-1"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border p-2"
        >
          <option value="">Sort</option>
          <option value="asc">Price ↑</option>
          <option value="desc">Price ↓</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredAndSorted.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isFav={favs.includes(product.id)}
            toggleFav={toggleFav}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

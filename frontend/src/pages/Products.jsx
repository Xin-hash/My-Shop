import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard"; // adjust path to your setup
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../api/products";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  // Form state
  const [form, setForm] = useState({ name: "", description: "", price: "" });
  const [editingId, setEditingId] = useState(null);



  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await getProducts();
      setProducts(res.data);
      setFilteredProducts(res.data); // keep filtered list in sync
    } catch (err) {
      setError(err.message || "Error fetching products");
    } finally {
      setLoading(false);
    }
  };


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updateProduct(editingId, form);
      } else {
        await createProduct(form);
      }
      setForm({ name: "", description: "", price: "" });
      setEditingId(null);
      fetchProducts();
    } catch (err) {
      console.error("Error saving product:", err.message);
    }
  };

  const handleEdit = (product) => {
    setEditingId(product._id);
    setForm({
      name: product.name,
      description: product.description,
      price: product.price,
    });
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      fetchProducts();
    } catch (err) {
      console.error("Error deleting product:", err.message);
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setFilteredProducts(products); // show all if empty
    } else {
      const filtered = products.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };


  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="p-6">
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="mb-6 p-4 border rounded-xl shadow grid gap-3 max-w-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {editingId ? "Update Product" : "Add Product"}
        </button>
      </form>

      {/* Search Bar (UI only) */}
      <div className="flex gap-2 mb-6 max-w-md">
        <input
          type="text"
          placeholder="Search product..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border rounded px-3 py-2 w-full"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </div>


      {/* Product List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default function ProductCard({ product, handleEdit, handleDelete }) {
  return (
    <div
      key={product._id}
      className="border rounded-xl p-4 shadow hover:shadow-lg transition"
    >
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-green-600 font-semibold">${product.price}</p>

      <div className="flex gap-2 mt-3">
        <button
          onClick={() => handleEdit(product)}
          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(product._id)}
          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

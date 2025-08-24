import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-blue-600 text-white px-6 py-4 shadow-md">
      {/* Logo */}
      <h1 className="text-2xl font-bold">My Shop</h1>

      {/* Links */}
      <div className="space-x-6">
        <Link 
          to="/" 
          className="hover:text-yellow-300 transition-colors"
        >
          Home
        </Link>
        <Link 
          to="/products" 
          className="hover:text-yellow-300 transition-colors"
        >
          Products
        </Link>
      </div>
    </nav>
  );
}

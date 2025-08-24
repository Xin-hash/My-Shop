// src/layouts/MainLayout.jsx
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="p-4">
        <Outlet /> {/* This will render the current page */}
      </main>
    </div>
  );
}

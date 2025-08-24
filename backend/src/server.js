import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";



// Load .env variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Create express app
const app = express();

// Middleware (to parse JSON)
app.use(express.json());

app.use(cors());

app.use("/api/products", productRoutes);

// Load PORT from env
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

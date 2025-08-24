import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true } // adds createdAt & updatedAt automatically
);

const Product = mongoose.model("Product", productSchema);

export default Product;

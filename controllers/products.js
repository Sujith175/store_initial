const Product = require("../Models/Product");

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({});
  res.status(200).json({ products });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "products routes" });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};

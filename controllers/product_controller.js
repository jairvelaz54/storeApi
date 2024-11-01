const Product = require("../models/Product");

const fetchAll = async (req, res) => {
  const products = await Product.find();
  res.send("welcome");
};

const create = async (req, res) => {
  const products = await Product.find();
  res.send(products);
};

const send = async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.send(product);
};

const update = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!product) return res.status(404).send("Product not found");
  res.send(product);
};

const remove = async (req, res) => {
  const product = await Product.findByIdAndRemove(req.params.id);
  if (!product) return res.status(404).send("Product not found");
  else return res.status(200).send("Product eliminated");
};

module.exports = { fetchAll };
module.exports = { create };
module.exports = { send };
module.exports = { update };
module.exports = { remove };
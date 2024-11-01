const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const product_Controller = require("../controllers/product_controller");

router.get("/", product_Controller.fetchAll());

router.get("/", product_Controller.create());

router.post("/", product_Controller.send());

router.put("/:id", product_Controller.update());

router.delete("/:id", product_Controller.remove());

module.exports = router;
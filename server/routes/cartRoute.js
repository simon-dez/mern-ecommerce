import express from "express";
import PromoCode from "../models/promoCode.js";
import Product from "../models/Product.js";

const router = express.Router();

//  promo code
router.post("/promo/apply", async (req, res) => {
  const { code } = req.body;
  const promo = await PromoCode.findOne({ code });

  if (!promo) {
    return res.status(400).json({ message: "Invalid promo code" });
  }

  res.json({ discount: promo.discount });
});

// product recommendations
router.post("/recommendations", async (req, res) => {
  const { cart } = req.body;

  const productIds = cart.map((item) => item._id);
  const category = await Product.find({ _id: { $in: productIds } }).distinct(
    "category"
  );

  const recommendations = await Product.find({
    category: { $in: category },
    _id: { $nin: productIds },
  }).limit(4);

  res.json(recommendations);
});

export default router;

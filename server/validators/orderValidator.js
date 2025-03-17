import { check, validationResult } from "express-validator";

export const validateOrder = [
  check("shippingInfo.name").notEmpty().withMessage("Name is required"),
  check("shippingInfo.address").notEmpty().withMessage("Address is required"),
  check("shippingInfo.city").notEmpty().withMessage("City is required"),
  check("shippingInfo.zip").notEmpty().withMessage("Zip code is required"),
  check("cart").isArray().withMessage("Cart must be an array"),
  check("total").isNumeric().withMessage("Total must be a number"),
];

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

import { body, validationResult } from "express-validator";

export const validateChatbotMessage = [
  body("message").notEmpty().withMessage("Message is required"),
];

export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

import { body, validationResult } from 'express-validator';

// Validation rules for chatbot messages
export const validateChatbotMessage = [
  body('message').notEmpty().withMessage('Message is required'),
];

// Middleware to handle validation errors
export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
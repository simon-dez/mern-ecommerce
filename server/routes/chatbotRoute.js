import express from 'express';
import { handleChatbotMessage } from '../controllers/chatbotController.js';
import { validateChatbotMessage, handleValidationErrors } from '../validators/chatbotValidator.js';

const router = express.Router();

router.post('/chatbot', 
    validateChatbotMessage, 
    handleValidationErrors, 
    handleChatbotMessage);

export default router;
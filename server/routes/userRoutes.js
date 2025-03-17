import express from 'express';
import { getUsers, createUser, deleteUser } from '../controllers/userController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// Get all users
router.get('/', getUsers);

// Create a new user
router.post('/', createUser);

// Delete a user
router.delete('/:id', deleteUser);

export default router;
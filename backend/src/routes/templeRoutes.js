import express from 'express';
import {
  createTemple,
  getTemples,
  getTempleById,
  updateTemple,
  deleteTemple,
  verifyTemple,
} from '../controllers/templeController.js';
import {
  authenticate,
  authorizeAdmin,
} from '../middlewares/authMiddleware.js';

const templeRouter = express.Router();

templeRouter
  .route('/')
  .post(authenticate, createTemple)
  .get(getTemples);

templeRouter
  .route('/:id')
  .get(getTempleById)
  .put(authenticate, updateTemple)
  .delete(authenticate, authorizeAdmin, deleteTemple);

templeRouter
  .route('/verify/:id')
  .put(authenticate, authorizeAdmin, verifyTemple);

export default templeRouter;

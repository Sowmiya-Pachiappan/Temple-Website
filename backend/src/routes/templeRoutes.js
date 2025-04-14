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
import { connectUserToTemple } from '../controllers/userController.js';

const templeRouter = express.Router();

templeRouter.route('/').post(createTemple).get(getTemples);

templeRouter
  .route('/:id')
  .get(getTempleById)
  .put(authenticate, updateTemple)
  .delete(authorizeAdmin, deleteTemple);

templeRouter
  .route('/:id/verify')
  .put(authorizeAdmin, verifyTemple);

templeRouter.route(
  '/:id/connect',
  authenticate,
  connectUserToTemple
);

export default templeRouter;

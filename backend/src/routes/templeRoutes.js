import express from 'express';
import {
  createTemple,
  getTemples,
  getTempleById,
  updateTemple,
  deleteTemple,
  verifyTemple,
  getVerifiedTemples,
  getMyTemples,
  getNotConnectedTemples,
  connectTemple,
} from '../controllers/templeController.js';
import {
  authenticate,
  authorizeAdmin,
} from '../middlewares/authMiddleware.js';

const templeRouter = express.Router();

templeRouter.route('/').post(createTemple).get(getTemples);

templeRouter
  .route('/my-temples')
  .get(authenticate, getMyTemples);
templeRouter.route('/verified').get(getVerifiedTemples);
templeRouter
  .route('/not-connected')
  .get(authenticate, getNotConnectedTemples);
templeRouter
  .route('/connect')
  .post(authenticate, connectTemple);
templeRouter
  .route('/:id')
  .get(getTempleById)
  .put(authenticate, updateTemple)
  .delete(authenticate, authorizeAdmin, deleteTemple);

templeRouter
  .route('/verify/:id')
  .put(authenticate, authorizeAdmin, verifyTemple);

export default templeRouter;

import express from 'express';
import {
  authenticate,
  authorizeAdmin,
} from '../middlewares/authMiddleware.js';
import {
  getHomePage,
  updateHomePage,
} from '../controllers/homePageController.js';

const homePageRouter = express.Router();

homePageRouter.route('/').get(getHomePage);
homePageRouter
  .route('/update')
  .put(authenticate, authorizeAdmin, updateHomePage);

export default homePageRouter;

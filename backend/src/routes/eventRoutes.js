import express from 'express';
import {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
  getEventsByTemple,
} from '../controllers/eventController.js';
import { authenticate } from '../middlewares/authMiddleware.js';

const evntRouter = express.Router();

evntRouter
  .route('/')
  .post(authenticate, createEvent)
  .get(getAllEvents);
evntRouter
  .route('/:id')
  .get(getEventById)
  .put(authenticate, updateEvent)
  .delete(authenticate, deleteEvent);
evntRouter.get('/temple/:templeId', getEventsByTemple);

export default evntRouter;

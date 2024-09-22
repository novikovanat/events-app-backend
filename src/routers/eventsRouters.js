import { Router } from 'express';
import {
  getAllEventsController,
  getEventByIdController,
  addEventController,
  getAllParticipantsEvController,
  addParticipantController
} from '../controllers/eventControllers.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';

const eventRouters = Router();

eventRouters.get('/', (req, res) => {
  res.json({
    message: 'Hello World',
  });
});

eventRouters.get('/events', ctrlWrapper(getAllEventsController));

eventRouters.get('/events/:eventId', ctrlWrapper(getEventByIdController));

eventRouters.post('/events', ctrlWrapper(addEventController));

eventRouters.get(
  '/events/:eventId/participants',
  ctrlWrapper(getAllParticipantsEvController),
);
eventRouters.post(
  '/events/:eventId/participants',
  ctrlWrapper(addParticipantController),
);

export default eventRouters;

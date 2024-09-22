import {
  addEvent,
  getAllEvents,
  getEventById,
} from '../servises/eventServises.js';

export const addEventController = async (req, res) => {
  const payload = req.body;
  console.log('==========req==========================');
  console.log(req.body);
  console.log('====================================');
  const event = await addEvent(payload);
  res.status(201).json({
    status: 201,
    data: event,
    message: 'New event successfully added',
  });
};

export const getAllEventsController = async (req, res) => {
  const events = await getAllEvents();
  res.json({
    status: 200,
    data: events,
    message: 'Successfully found events!',
  });
};

export const getEventByIdController = async (req, res, next) => {
  const { eventId } = req.params;
  const event = await getEventById(eventId);
  if (!event) {
    next(new Error(`Event with id ${eventId} not found`));
    return;
  }
  res.status(200).json({
    status: 200,
    data: event,
    message: `Successfully found event with id ${eventId}`,
  });
};

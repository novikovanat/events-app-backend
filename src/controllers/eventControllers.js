import {
  addEvent,
  getEvents,
  getEventById,
  getAllParticipantsEv,
  addParticipant
} from '../servises/eventServises.js';
import parsePaginationParams from '../utils/parsePaginationParams.js';

export const addEventController = async (req, res) => {
  const payload = req.body;
  const event = await addEvent(payload);
  res.status(201).json({
    status: 201,
    data: event,
    message: 'New event successfully added',
  });
};

export const getEventsController = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const events = await getEvents(page, perPage );
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

export const getAllParticipantsEvController = async (req, res) => {
  const {eventId} = req.params;
  const participants = await getAllParticipantsEv(eventId);
  res.json({
    status: 200,
    data: participants,
    message: 'Successfully found participants!',
  });
};

export const addParticipantController = async (req, res) => { 
  const {body} = req;
  const {eventId} = req.params;
  const participant = await addParticipant({... body, eventId});
  res.status(201).json({
    status: 201,
    data: participant,
    message: 'New participant successfully added',
  });
};
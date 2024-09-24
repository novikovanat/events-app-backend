import eventsCollection from '../db/eventSchema.js';
import participantsCollection from '../db/participantSchema.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';
import createHttpError from 'http-errors';

export const getEvents = async (page, perPage) => {
  const skip = (page - 1) * perPage;
  const events = await eventsCollection.find().skip(skip).limit(perPage);
  const total = await eventsCollection.countDocuments();
  const paginationData = calculatePaginationData(total, perPage, page);
  return { events, ...paginationData };
};

export const getEventById = async (eventId) => {
  const event = await eventsCollection.findById(eventId);
  return event;
};

export const addEvent = async (payload) => {
  const newEvent = await eventsCollection.create({ ...payload });
  return newEvent;
};

export const getAllParticipantsEv = async (eventId) => {
  const participants = await participantsCollection.find({ eventId: eventId });
  return participants;
};

export const addParticipant = async (payload) => {
  const { email, eventId } = payload;
  const isExist = await participantsCollection.findOne({
    eventId: eventId,
    email: email,
  });
  if (isExist) {
    throw createHttpError(409, 'This email already in use');
  }
  const newParticipant = await participantsCollection.create(payload);
  return newParticipant;
};

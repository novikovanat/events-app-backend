import eventsCollection from '../db/eventSchema.js';
import participantsCollection from '../db/participantSchema.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';

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
  const newEvent = eventsCollection.create({ ...payload });
  return newEvent;
};

export const getAllParticipantsEv = async (eventId) => {
  const participants = participantsCollection.find({ eventId: eventId });
  return participants;
};

export const addParticipant = async (payload) => {
  console.log('====================================');
  console.log(payload);
  console.log('====================================');
  const newParticipant = participantsCollection.create(payload);
  return newParticipant;
};

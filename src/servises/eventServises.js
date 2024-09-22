import eventsCollection from '../db/eventSchema.js';
import participantsCollection from '../db/participantSchema.js';

export const getAllEvents = async () => {
  const events = await eventsCollection.find();
  return events;
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

export const addParticipant = async (payload, eventId) => {
  const newParticipant = participantsCollection.create({ ...payload, eventId: eventId });
  return newParticipant;
};

import eventsCollection from '../db/eventSchema.js';

export const getAllEvents = async () => {
  const events = await eventsCollection.find();
  return events;
};

export const getEventById = async (eventId) => {
  const event = await eventsCollection.findById(eventId);
  return event; 
};

export const addEvent = async(payload)=>{
 const newEvent = eventsCollection.create({...payload});
 return newEvent;
};

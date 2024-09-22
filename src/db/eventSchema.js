import { model, Schema } from 'mongoose';

const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    eventDate: {
      type: Date,
      required: true,
    },
    organizer: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: false,
    versionKey: false,
  },
);

const eventsCollection = model('events', eventSchema);
export default eventsCollection;

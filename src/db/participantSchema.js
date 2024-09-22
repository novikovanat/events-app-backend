import { model, Schema } from 'mongoose';
import emailValidation from '../validation/emailValidation.js';
import { SOURCE_TYPE } from '../constants/constants.js';

const participantSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      validate: emailValidation,
      required: true,
      unique: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    source: {
      type: String,
      required: true,
      enum: SOURCE_TYPE,
    },
    eventId: {
      type: Schema.Types.ObjectId,
      ref: 'events',
      required: true,
    },
  },
  {
    timestamps: false,
    versionKey: false,
  },
);

const participantsCollection = model('participants', participantSchema);
export default participantsCollection;

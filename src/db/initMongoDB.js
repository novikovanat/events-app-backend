import mongoose from 'mongoose';
import env from '../utils/env.js';
const initMongoDB = async () => {
  try {
    const user = env('MONGODB_USER');
    const pwd = env('MONGODB_PASSWORD');
    const url = env('MONGODB_URL');
    const db = env('MONGODB_DB');
    mongoose.connect(
      `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority&appName=ClusterN0`,
    );
    console.log('Mongo connection established');
  } catch (error) {
    console.log('Error while setting up mongo connection', error);
  }
};

export default initMongoDB;

import createHttpError from 'http-errors';
const ctrlWrapper = (controller) => {
  return async (req, res, next) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      if (error.message.includes('Cast to ObjectId')) {
        next(createHttpError(404, 'Wrong ID format'));
        return;
      }
      next(error);
    }
  };
};

export default ctrlWrapper;

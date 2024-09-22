import { HttpError } from 'http-errors';

export const errorHandler = (error, req, res) => {
  if (error instanceof HttpError) {
    const { status, message } = error;
    res.status(status).json({
      status,
      message,
      error,
    });
    return;
  }
  const { status = 500, message } = error;
  res.status(status).json({
    status,
    message,
    error,
  });
};

export const notFoundHandler = (req, res) => {
  res.status(404).json({
    status: 404,
    message: 'Page not found',

  });
};

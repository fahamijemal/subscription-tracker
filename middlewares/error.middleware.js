// Centralized error handling middleware
const errorMiddleware = (err, req, res, next) => {
  try {
    let error = { ...err };
    error.message = err.message;

    console.error(err); // Log original error for debugging

    // Handle invalid MongoDB ObjectId errors
    if (err.name === 'CastError') {
      const message = 'Resource not found';
      error = new Error(message);
      error.statusCode = 404;
    }

    // Handle duplicate key errors (e.g., unique email)
    if (err.code === 11000) {
      const message = 'Duplicate field value entered';
      error = new Error(message);
      error.statusCode = 400;
    }

    // Handle Mongoose validation errors
    if (err.name === 'ValidationError') {
      const message = Object.values(err.errors).map(val => val.message);
      error = new Error(message.join(', '));
      error.statusCode = 400;
    }

    // Send error response to client
    res.status(error.statusCode || 500).json({
      success: false,
      error: error.message || 'Server Error',
    });

  } catch (error) {
    // Pass unexpected errors to Express
    next(error);
  }
};

export default errorMiddleware;

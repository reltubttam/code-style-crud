const errorHandler = async (context, next)  => {
  try {
    await next();
  } catch (error) {
    context.status = error.statusCode || 500;
    context.body = {
      error: error.message,
      success: false,
    };
  }
};

export default errorHandler;

const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  return res.json({
    success: false,
    error: err.message,
  });
};

module.exports = {
  errorHandler,
};

module.exports = (err, req, res, next) => {
  const { statusCode = 500, message } = err;
  // res.status(statusCode).send(
  //   { message: statusCode === 500 ? 'На сервере произошла ошибка' : message },
  // );
  res.status(statusCode);
  res.json({ message: statusCode === 500 ? 'На сервере произошла ошибка' : message });
  next();
};

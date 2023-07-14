const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const helmet = require('helmet');
const router = require('./routes/index');

const cors = require('./middlewares/cors');

const { requestLogger, errorLogger } = require('./middlewares/logger');
const { PORT, DB_CONN } = require('./utils/config');
const limiter = require('./utils/rateLimit');

const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(helmet());
app.use(limiter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors);
app.use(requestLogger);
app.use(router);

mongoose.connect(DB_CONN, {
  useNewUrlParser: true,
});
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT);

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const errorMiddlewares = require('./middlewares/error');
const tasks = require('./api/tasks');
const users = require('./api/users');

const app = express();

//Connect to database
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Middlewares
app.use(morgan('common'));
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN,
}));
app.use(express.json());

//Routes
app.use('/tasks', tasks);
app.use('/users', users);

//Error handling
app.use(errorMiddlewares.notFound);
app.use(errorMiddlewares.errorHandler);

//Listen
const port = process.env.PORT || 2137;
app.listen(port, () => {
  console.log(`Listening at ${port}`);
});

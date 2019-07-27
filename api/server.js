const express = require('express');
const cors = require('cors')
const helmet = require('helmet');
const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

const usersRouter = require('../users/usersRouter.js');


server.use('/users', usersRouter);


module.exports = server;
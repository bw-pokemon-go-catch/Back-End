const express = require('express');
const cors = require('cors')
const helmet = require('helmet');
const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

const authRouter = require('../auth/authRouter.js');
const pokemonRouter = require('../pokemon/pokemonRouter.js');
const usersRouter = require('../users/usersRouter.js');


server.use('/auth', authRouter);
server.use('/pokemon', pokemonRouter);
server.use('/users', usersRouter);


module.exports = server;
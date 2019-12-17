const express = require('express');
const helmet = require('helmet');
const db = require('../data/db-config.js');
// const AuthRouter = require('./auth/authRouter');
// const TaskRouter = require('./data/tasks/task-router');
// const ResourceRouter = require('./data/resources/resource-router');
const server = express();
server.use(express.json());
server.use(helmet());

// server.use('/api/projects', ProjectRouter);
// server.use('/api/resources', ResourceRouter);
// server.use('/api/tasks', TaskRouter);
server.get('/', (req, res) => {
const port = process.env.PORT || 4200
res.send(`Server is up and running on port ${port}`)
})
module.exports = server;
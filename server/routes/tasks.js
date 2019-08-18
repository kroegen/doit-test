const express  = require('express');
const tasks = express.Router();

const tasksController = require('../controllers/tasks');

tasks.get('/',  tasksController.list);
tasks.post('/', tasksController.create);

module.exports = tasks;

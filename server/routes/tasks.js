const express  = require('express');
const tasks = express.Router();

const tasksController = require('../controllers/tasks');

tasks.get('/',       tasksController.list);
tasks.post('/',      tasksController.create);
tasks.delete('/:id', tasksController.delete);
tasks.put('/:id',    tasksController.update);

module.exports = tasks;

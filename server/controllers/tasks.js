const tasks = require('../services/tasks');

module.exports = {
    create : tasks.createTask,
    list   : tasks.getTasks,
    delete : tasks.deleteTask,
    update : tasks.updateTask,
}

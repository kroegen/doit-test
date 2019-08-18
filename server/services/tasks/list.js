const Task  = require('../../models/Task');
const utils = require('../../utils');

exports.getTasks = async (req, res, next) => {
    try {
        const tasks = (await Task.find()).map(task => utils.dump.dumpTask(task));

        await res.send({ status: 1, data: { tasks } });
    } catch (error) {
       return next(error);
    }
}

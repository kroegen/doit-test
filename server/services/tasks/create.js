const Task  = require('../../models/Task');
const utils = require('../../utils');

exports.createTask = async(req, res, next) => {
    try {
        const { name, content } = req.body;
        const task              = await new Task({ name, content });

        await task.save();
        await res.send({ status: 1, data: { task: utils.dump.dumpTask(task) } });
    } catch (error) {
       return next(error);
    }
};

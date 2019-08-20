const Task  = require('../../models/Task');
const utils = require('../../utils');

exports.updateTask = async(req, res, next) => {
    try {
        const { id }            = req.params;
        const { name, content } = req.body;
        const task              = await Task.findOne({ _id: id });

        task.name = name;
        task.content = content;

        await task.save();
        await res.send({ status: 1, data: { task: utils.dump.dumpTask(task) } });
    } catch (error) {
       return next(error);
    }
};

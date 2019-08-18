const Task = require('../../models/Task');

exports.createTask = async(req, res, next) => {
    try {
        const { content } = req.body;
        const task = await new Task({ content });

        await task.save();
        await res.send({ status: 1, data: { task } });
    } catch (error) {
       return next(error);
    }
};

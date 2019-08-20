const Task = require('../../models/Task');

exports.deleteTask = async(req, res, next) => {
    try {
        const { id } = req.params;
        const task   = await Task.findOne({ _id: id });

        await task.remove();
        await res.send({ status: 1 });
    } catch (error) {
       return next(error);
    }
};

exports.dumpTask = task => {
    return {
        id      : task._id,
        name    : task.name,
        content : task.content,
    }
}

exports.dumpUser = user => {
    return {
        id        : user._id,
        name      : user.name,
        status    : user.status,
        email     : user.email,
        createdAt : user.createdAt,
        updatedAt : user.updatedAt,
        info      : user.info,
        age       : user.age,
    }
}

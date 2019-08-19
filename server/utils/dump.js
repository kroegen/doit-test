exports.dumpTask = post => {
    return {
        id      : post._id,
        content : post.content,
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
    }
}

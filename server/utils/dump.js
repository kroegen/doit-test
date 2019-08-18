exports.dumpTask = post => {
    return {
        id      : post._id,
        content : post.content,
    }
}

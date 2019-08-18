const mongoose = require('mongoose');
const config   = require('./bin/config.json');

require('./models/User.js');
require('./models/Task.js');

mongoose.Promise = global.Promise;

const setUpConnection = () => {
    console.log(`MongoDB config: ${JSON.stringify(config)}`);
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`, { useNewUrlParser: true });
}

module.exports = {
    mongoose,
    setUpConnection
};

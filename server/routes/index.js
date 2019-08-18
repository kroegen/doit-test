const express = require('express');
const router  = express.Router();

const sessions  = require('./sessions');
const tasks     = require('./tasks');

// router.use((req, res, next) => {
//     console.log(req);
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

router.use('/sessions', sessions);
router.use('/tasks', tasks);

module.exports = router;

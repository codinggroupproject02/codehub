const router = require('express').Router();

const coachRoutes = require('./coach-routes.js');

router.use('/coaches', coachRoutes);

module.exports = router;
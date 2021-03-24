const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const profileRoutes = require('./profile-routes');
const bounties = require('./bounties');
const userProfileRoutes = require('./userprofile-routes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/profiles', profileRoutes);
router.use('/userprofile', userProfileRoutes);

router.use((req,res) => {
    res.status(404).end();
});

module.exports = router;
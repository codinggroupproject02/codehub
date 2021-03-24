const router = require('express').Router();
const { User } = require('../models')

router.get('/', (req, res) => {
    User.findAll({
        attributes: [
            'id',
            'role',
            'first_name',
            'last_name',
            'knowledgeable_in'
        ]
    })
    .then(dbUserData => {
        const users = dbUserData.map(user => user.get({ plain: true }));
<<<<<<< HEAD
        res.render('profile-cards', { users });
=======
        res.render('profile-cards', { 
            users,
            loggedIn: req.session.loggedIn,
            role: req.session.role,
            var: req.session.var
         });
>>>>>>> 096ef037de75a9992f6351b263ecf5cf30c6893b
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
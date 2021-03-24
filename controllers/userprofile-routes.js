const router = require('express').Router();
const { User, Post, Vote, Comment } = require('../models')

router.get('/', (req, res) => {
  res.render('userprofile', { loggedIn: true });
})

module.exports = router;
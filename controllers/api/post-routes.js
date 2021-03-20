const router = require('express').Router();
const { Post, User } = require('../../models');

router.get('/', (req,res) => {
    Post.findAll({
        attributes: ['id', 'title', 'content', 'user_id'],
        include: [
            {
                model: User,
                attributes: ['first_name', 'last_name']
            }
        ]
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;
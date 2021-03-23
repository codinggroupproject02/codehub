const router = require('express').Router();
const { User, Post, Vote, Comment } = require('../models')

//======GET USER POSTS =======//
router.get("/", (req, res) => {
    User.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: Post,
          attributes: ["id", "title", "content", "created_at"],
        },
        //Include the Comment model here
        {
          model: Comment,
          attributes: ["id", "comment_text", "created_at"],
          includes: {
            model: Post,
            attributes: ["title"],
          },
        },
        {
          model: Post,
          attributes: ["title"],
          through: Vote,
          as: "voted_posts",
        },
      ],
    })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with the id" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });


module.exports = router;
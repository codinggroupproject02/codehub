const router = require("express").Router();
const { Post, User, Vote, Comment } = require("../models");
const sequelize = require("../config/connection");

router.get("/", (req, res) => {
  res.render("homepage");
});


router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
router.get('/signup', (req, res) => {
      res.render('signup');
});
module.exports = router;
router.get("/post", (req, res) => {
  Post.findAll({
    attributes: [
      "id",
      "title",
      "content",
      "user_id",
      [
        sequelize.literal(
          "(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)"
        ),
        "vote_count",
      ],
    ],
    order: [["created_at", "DESC"]],
    include: [
      //including the comment here
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        order: [["created_at", "DESC"]], //Newest comment are shown first
        include: {
          model: User,
          attributes: ["first_name", "last_name"],
        },
      },
      {
        model: User,
        attributes: ["first_name", "last_name"],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      // serialize the data
      const posts = dbPostData.map(post => post.get({ plain: true }));

      // pass data
      res.render("codingBuddies", { posts });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

const router = require("express").Router();
const { Post, User, Vote, Comment } = require("../models");
const sequelize = require("../config/connection");

router.get("/", (req, res) => {

  let result;  //It's user then
  if(req.session.role == 'coach'){
    req.session.var = true;
  }else{
    req.session.var = false;
  }

  res.render("homepage", {
<<<<<<< HEAD
    loggedIn: req.session.loggedIn,
=======
    loggedIn: req.session.loggedIn, 
    var: req.session.var      
>>>>>>> 096ef037de75a9992f6351b263ecf5cf30c6893b
  });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

//Logout
// router.post('/logout',(req,res) => {
  
// });

router.get("/register", (req, res) => {
  res.render("register");
});


router.get("/post", (req, res) => {
  Post.findAll({
    where: { type: "forum"},
    attributes: [
      "id",
      "title",
      "type",
      "skills",
      "content",
      "user_id",
      "created_at",
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
        res.status(404).json({ message: "No post found with this type of post" });
        return;
      }
      // serialize the data
      const posts = dbPostData.map((post) => post.get({ plain: true }));

      console.log('***********posts: '+ JSON.stringify(posts));

      // pass data if logged in
      res.render("forum", {
<<<<<<< HEAD
        posts
        //loggedIn: false, //req.session.loggedIn,
=======
        posts,
        loggedIn:req.session.loggedIn,
        role: req.session.role,
        var: req.session.var
>>>>>>> 096ef037de75a9992f6351b263ecf5cf30c6893b
      });
    })

    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

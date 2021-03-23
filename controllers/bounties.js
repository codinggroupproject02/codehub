const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");

// router.get("/", (req, res) => {
//   res.render("bounties", { loggedIn: true });
// });

router.get("/", (req, res) => {
    //To get the post from the user
    User.findAll({
        attributes: { exclude: ["password"] },
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
            }
        ]
      })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      // serialize the data
      const user = dbPostData.map((usr) => usr.get({plain:true}));

      console.log('**********What is the output: '+ JSON.stringify(user[0])).
      
      //pass data if logged in
      res.render("bounties",{user});      
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

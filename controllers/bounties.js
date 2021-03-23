const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");

// router.get("/", (req, res) => {
//   res.render("bounties", { loggedIn: true });
// });

router.get("/", (req, res) => {
    //To get the post from the user
    User.findOne({
        attributes: { exclude: ["password"] },
        where: { id: req.session.user_id},
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

      // console.log('**********What is the output: '+ JSON.stringify(dbPostData));

      // serialize the data
      const user = dbPostData.get({plain:true});    
      
      console.log('************user: '+ JSON.stringify(user));
      
      //pass data if logged in
      res.render("bounties",user);      
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

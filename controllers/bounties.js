const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");

router.get("/", (req, res) => {
  Post.findAll({
    where: { type: "bounties"},
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

      // pass data if logged in
      res.render("bounties", {
        posts,
        loggedIn:req.session.loggedIn,
        //extra to isolate the coach view
        loggedIn:req.session.role
      });
    })

    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// router.get("/", (req, res) => {
//     //To get the post from the user
//     User.findOne({
//         attributes: { exclude: ["password"] },
//         where: { id: req.session.user_id},
//         include: [
//             {
//               model: Post,
//               attributes: ["id", "title", "content", "created_at"],
//             },
//             //Include the Comment model here
//             {
//               model: Comment,
//               attributes: ["id", "comment_text", "created_at"],
//               includes: {
//                 model: Post,
//                 attributes: ["title"],
//               },
//             }
//         ]
//       })
//     .then((dbPostData) => {
//       if (!dbPostData) {
//         res.status(404).json({ message: "No post found with this id" });
//         return;
//       }

//       // console.log('**********What is the output: '+ JSON.stringify(dbPostData));

//       // serialize the data
//       const user = dbPostData.get({plain:true});    
      
//       console.log('************user: '+ JSON.stringify(user));
      
//       //pass data if logged in
//       res.render("bounties",user);      
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

module.exports = router;

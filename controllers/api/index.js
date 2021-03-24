const router = require("express").Router();

const userRoutes = require("./user-routes");
const postRoutes = require("./post-routes");
const commentRoutes = require("./comment-routes");
const coachRoutes = require("./coach-routes.js");
const chatRoutes = require("./chat-routes.js");
const { route } = require("./user-routes");

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);
router.use("/coaches", coachRoutes);

//Chat
router.use("/chat", chatRoutes);


module.exports = router;
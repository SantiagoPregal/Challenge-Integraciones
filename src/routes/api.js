const express = require("express");
const router = express.Router();
const usersController = require("../controllers/userController.js");

router.get("/", (req, res) => {
  res.json({
    message: "API Challenge",
    status: "success",
  });
});

router.get("/users", usersController.getUsers);
router.get("/posts", usersController.getPosts);
router.get("/users/posts-summary", usersController.getUsersAndPosts);

module.exports = router;

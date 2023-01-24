const express = require("express");

const postController = require("./postController");

const router = express.Router();

router.get("/", postController.getPosts);
router.get("/:id", postController.getPosts);
router.post("/", postController.save);
router.put("/:id", postController.updatePostById);
router.delete("/:id", postController.deletePostById);

module.exports = router;

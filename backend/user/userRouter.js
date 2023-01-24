const express = require("express");

const userController = require("./userController");

const router = express.Router();

router.get("", userController.getUsers);
router.get("/:id", userController.getUsers);
router.post("", userController.save);
router.put("/:id", userController.updateUserById);
router.delete("/:id", userController.deleteUserById);

module.exports = router;

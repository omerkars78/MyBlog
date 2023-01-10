const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");

router.get("/blogs/category/:slug", userController.blog_list);

router.get("/blogs/:slug", userController.blogs_details);

router.get("/blogs", userController.blog_list);

router.get("/", userController.index);
 
router.get("/contacts", userController.contacts);
router.get("/about", userController.about);
module.exports = router;
const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");

router.get("/blogs/category/:slug", userController.blog_list);

router.get("/blogs/:slug", userController.blogs_details);

router.get("/contacts", userController.contacts);

router.get("/about", userController.about);

router.get("/blogs", userController.blog_list);

router.get("/", userController.index);



module.exports = router;
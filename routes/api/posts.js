const express = require("express");
const router = express.Router();

// @route GET api/posts/test
// @desc  Check posts route
// @access Public
router.get("/test", (req, res) => {
  res.json("Welcome to the posts route");
});

module.exports = router;

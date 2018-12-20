const express = require("express");
const router = express.Router();

// @route GET api/profile/test
// @desc  Check profile route
// @access Public
router.get("/test", (req, res) => {
  res.json("Welcome to the profile route");
});

module.exports = router;

const express = require("express");
const router = express.Router();

// @route GET api/users/test
// @desc  Check user route
// @access Public
router.get("/test", (req, res) => {
  res.json({
    message: "Welcome to the users route"
  });
});

module.exports = router;

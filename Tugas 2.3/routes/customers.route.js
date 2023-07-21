const express = require("express");

const { getUserBalance } = require("../controllers/customers.controller");

// Router middleware -> router object
const router = express.Router();

// @route GET /customers/:id
// @desc Get customer balance
router.get("/:id", (req, res) => {
  try {
    const balanceResponse = getUserBalance(req.params.id);
    res.send(balanceResponse);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;

const express = require("express");
const router = express.Router();

const { transfer } = require("../controllers/transactions.controller");

// router.get("/", (req, res) => {
//   res.send(transactions);
// });

router.post("/", (req, res) => {
  const response = transfer(
    req.body.sourceId,
    req.body.destinationId,
    req.body.amount
  );
  res.send(response);
});

module.exports = router;

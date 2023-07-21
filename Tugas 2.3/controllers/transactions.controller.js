const { transferBalance } = require("../services/transactions.service");

const transfer = (sourceId, destinationId, amount) => {
  if (amount < 1) {
    throw {
      type: "invalid-amount",
      message: "Minimum transfer 1",
    };
  }
  transferBalance(sourceId, destinationId, amount);
  return {
    status: "success",
    data: {},
  };
};

module.exports = { transfer };

const {
  findCustomerById,
  addBalance,
  deductBalance,
} = require("../models/customers.model");
const { createNewTransaction } = require("../models/transactions.model");

const transferBalance = (sourceId, destinationId, amount) => {
  // Dari transactions model
  createNewTransaction(sourceId, destinationId, amount);

  // Dari customers model
  addBalance(destinationId, amount);
  deductBalance(sourceId, amount);
};

module.exports = { transferBalance };

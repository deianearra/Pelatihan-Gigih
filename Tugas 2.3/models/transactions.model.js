let transactions = [
  {
    id: "1",
    sourceId: "12345",
    destinationId: "54321",
    amount: 5000,
  },
];

const createNewTransaction = (sourceId, destinationId, amount) => {
  transactions.push({
    id: Date.now(),
    sourceId,
    destinationId,
    amount,
  });
  return true;
};

module.exports = { createNewTransaction };

const { findCustomerById } = require("../models/customers.model");

const getUserBalanceById = (id) => {
  //   Fetching data
  const customerData = findCustomerById(id);
  if (customerData == null) {
    throw {
      type: "not-found",
      message: "Cannot find user by id",
    };
  }

  // Bussiness logic
  const balance = customerData.balance;

  return balance;
};

module.exports = { getUserBalanceById };

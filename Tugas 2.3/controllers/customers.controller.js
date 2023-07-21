const { getUserBalanceById } = require("../services/customers.service");

const getUserBalance = (id) => {
  // Input validation
  if (id.length <= 3) {
    throw {
      status: "validation-error",
      message: "Minimal ID length 3",
    };
  }
  try {
    const balance = getUserBalanceById(id);
    //   Response generation
    return {
      status: "success",
      data: {
        balance,
      },
    };
  } catch (e) {
    throw e;
  }
};

module.exports = {
  getUserBalance,
};

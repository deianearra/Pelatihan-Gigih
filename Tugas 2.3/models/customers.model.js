let customerList = [
  {
    id: "12345",
    name: "John",
    balance: 50000,
  },
  {
    id: "54321",
    name: "Doe",
    balance: 150000,
  },
];

const findCustomerById = (id) => {
  return customerList.find((customer) => customer.id === id);
};

const addBalance = (id, amount) => {
  console.log("hi", { id, amount });
  const customer = findCustomerById(id);
  customer.balance += amount;
};

const deductBalance = (id, amount) => {
  const customer = findCustomerById(id);
  customer.balance -= amount;
};

module.exports = { addBalance, deductBalance, findCustomerById };

const express = require("express");
// const path = require("path");
// Routes
//  //const customerRoute = require("./routes/customers.route");
// const transactionsRoute = require("./routes/transactions.route");
const playlistRoute = require("./routes/playlists.route");

const app = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, "public")));

// app.use("/customers", customerRoute);
// app.use("/transactions", transactionsRoute);
app.use("/playlists", playlistRoute);

const listener = app.listen(8080, function () {
  console.log("Listening on port " + listener.address().port);
});

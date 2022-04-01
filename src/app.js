// console.log("Subscribe to my channel - With Chanakya!");

//Import modules
const express = require("express");
const dogRoutes = require("./routes/dog.routes");

// Define PORT for HTTP Server
const PORT = 9900;

// Initialize Express
const app = express();

app.use(dogRoutes);

app.listen(PORT, (err) => {
  console.log(`Server is up at localhost ${PORT}`);
});

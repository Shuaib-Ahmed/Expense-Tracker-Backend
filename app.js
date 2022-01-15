const express = require("express");
const server = express();
const cors = require("cors");
require('dotenv').config();

const expenseRoutes = require("./routes/expense");

const connectDB = require("./db/connect");

server.use(cors());
server.use(express.json());
server.use("/api/v1/expense", expenseRoutes);

server.all("*", (req, res) => {
  res.status(200).send("<h1>Server Is Running .... </h1>");
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    server.listen(process.env.PORT || 5000, () => {
      console.log(`Server is running at port 5000`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
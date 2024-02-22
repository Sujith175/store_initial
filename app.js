const express = require("express");
const app = express();

require("dotenv").config();
require("express-async-errors");

const connectDB = require("./DB/connectDB");
const notFoundMiddleware = require("./middlewares/not-found");
const productsRouter = require("./Routes/Products");
const errorMiddleware = require("./middlewares/errorHandler");

app.use(express.json());

app.get("/", (req, res) => {
  res.send('<h1>Store Api</h1><a href="/api/v1/products">Products Route</a>');
});

//npm i express-async-errors

app.use("/api/v1/products", productsRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`Server is listening at port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();

const express = require("express");
const { connection } = require("./config/db");
const app = express();
require("dotenv").config();
const cors=require("cors");
const { userLogRoute } = require("./routes/userLogs_route");
const { productRoute } = require("./routes/product_route");
const PORT = process.env.PORT;


app.use(cors())
app.use(express.json())

app.use('/signup',userLogRoute)
app.use("/products",productRoute)
app.listen(PORT, async () => {
  try {
    await connection;
    console.log("connected to DB");
  } catch (Err) {
    console.log(`Something went wrong ${Err}`);
  }
  console.log(`server running on ${PORT}`);
});

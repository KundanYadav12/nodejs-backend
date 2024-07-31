// require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes/auth-router");
const connectDb = require("./utils/db")


const corsOptions = {
  origin: "http://127.0.0.1:5173",
  methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json())
app.use("/api/auth", router);

const PORT = 5008;

connectDb().then(()=>{

    app.listen(PORT, () => {
      console.log(`server is running at port: ${PORT}`);
    });
});
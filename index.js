const express = require("express");
const { connect } = require("./config/db");
const { HospitalRouter } = require("./routes/Hospital.route");
const cors=require("cors")
const app = express();
app.use(cors({
  origin:"*"
}))
app.use(express.json());
app.use("/", HospitalRouter);
require("dotenv").config();



// app.use(bodyParser.urlencoded({ extended: true }))
// app.get("/", function (req, res) {
//     res.sendFile(__dirname + "/index.html")

// })
app.post("/", function (req, res) {
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  var result = weight / height
  res.send("the result is " + result)
});



app.listen(process.env.port, async () => {
  try {
    await connect;
    console.log("connect to db");
  } catch (error) {
    console.log("something went wrong ");
    console.log(error);
  }
  console.log("server is running " + process.env.port);
});

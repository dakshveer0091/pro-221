const express = require("express");
const app = express();
const server = require("http").Server(app);
app.use(express.json())
var nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  port:587,
  host:"smtp.gmail.com",
  auth:{
    user:"sharmacherry378@gmail.com",
    pass:"tdrt nvgt jehu cztk"
  }
})
server.listen(process.env.PORT || 3030);
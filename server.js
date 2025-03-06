import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import { orderMailer } from './contactFormController.js';
// const {orderMailer} = require("./controller/contactFormController")

const app = express();
const port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())

var transport = {
  name: 'gabapentin',
  host: 'mail.gabapentinshop.com',
  port: 465, // e.g. smtp.gmail.com
  secure: true,
  auth: {
    user: "admin@gabapentinshop.com",
    pass: "}eDCaN3=49~{"
  }
}

export const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('All works fine, congratz!');
  }
});

app.post('/express_backend', orderMailer)
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});


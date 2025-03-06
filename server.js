import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
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

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('All works fine, congratz!');
  }
});

app.post('/express_backend', async (req, res, next) => {

const {name, email,phone,message} = req.body
console.log(name, email,phone,message)
  var mail = {
    from: "Gabapentin <admin@gabapentinshop.com>",
    to: "admin@gabapentinshop.com",
    subject: 'Contact form request',
    html: `<html>
 <body>

 <p> ${name} is trying to contact. </p>
  <p>email : ${email} </p>
  <p>phone : ${phone} </p>
  <p>message : ${message} </p>
 </body>
</html>`
  }
// res.send({ msg: 'success' })
  const info = await transporter.sendMail(mail)
  if (info.messageId) {
    res.send({ msg: 'success' })
  } else {
    res.send({ msg: 'fail' })
  }
})
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});
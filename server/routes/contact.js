const express = require('express');
const router = express.Router();
const request = require('request');
const nodemailer = require('nodemailer');

router.post('/send', (req, res) => {
    console.log('What???');
    const outputData = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secureConnection: true,
        auth: {
            user: 'khiemledc@gmail.com',
            pass: 'BinTing2020'
        },
        tls: {
            chipers: "SSLv3"
        }
    });

    var mailOptions = {
        from: "khiemledc@gmail.com",
        to: "vapnews1@gmail.com",
        subject: "Nodejs Mail",
        text: "this is the email's body text..."
    };
    
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) console.log(error);
        else console.log("Message sent successfully: " + info.response);
    });


});
module.exports = router;
require('dotenv').config()
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  // host: "smtp.gmail.com",
  service: "gmail",
  port: 587,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});




exports.sendEmailToUser = async (email,subject,html)=>{
    try{
         const info = await transporter.sendMail({
    from: "1001096@daffodil.ac", 
    to: email, // list of recipients
    subject: subject, // subject line
    text: "FOODI", // plain text body
    html: html, // HTML body
  });
  

  console.log("Message sent: %s", info.messageId);
  // Preview URL is only available when using an Ethereal test account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    }catch(err){
        console.log(`error in sending email ${err}`)
    }
}
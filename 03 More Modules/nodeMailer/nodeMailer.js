// npm i nodemailer

// 1. Import nodemailer
const nodemailer = require("nodemailer");

// 2. Configure email and send it
async function sendMail() {

  // 1. Create an email transporter
  // SMTP (Simple mail transfer protocol)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "sandipkalekar808@gmail.com",
      pass: "****************", //16 digits pass from app passwords in 2-step verification under security of gmail
    },
  });

  // 2. Configure email content
  const mailOptions = {
    from:'sandipkalekar808@gmail.com',
    to:'sandipkalekar808@gmail.com',
    subject:'Welcome to Mailer',
    text:'This text has been sent using nodemailer'
  };

  // 3. Send the email
  try{
    const result = await transporter.sendMail(mailOptions);
    console.log("Mail sent successfully.")
  }catch(err){
    console.log("Error: ", err)
  }

}


sendMail();
const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: "2f752d49b875f183b3e5593260829b7b-787e6567-c22ebc3c",
    domain: "sandbox4cb0dd4fc6bb4f92908699808d4df132.mailgun.org",
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (subject, text, cb) => {
  const mailOptions = {
    from: "Resume Notification <maniresumereview@gmail.com>",
    to: "punnamanikumar@gmail.com",
    subject,
    text,
  };
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) cb(err, null);
    else cb(null, data);
  });
};

module.exports = sendMail;

var nodemailer = require("nodemailer");

// Check if email configuration is available
if (!process.env.EMAIL || !process.env.EMAIL_PASS) {
  console.warn("Email configuration not found. Email functionality will be disabled.");
  module.exports = function() {
    return Promise.reject(new Error("Email configuration not available"));
  };
} else {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  function sendEmail(to, subject, text) {
    var mailOptions = {
      from: process.env.EMAIL,
      to: to,
      subject: subject,
      text: text,
    };

    return new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          return reject(error);
        } else {
          return resolve(info.response);
        }
      });
    });
  }

  module.exports = sendEmail;
}

const mailer = require("nodemailer");

// nodemailer configs
const mailConfigs = {
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
};

const mailTransport = mailer.createTransport(mailConfigs);

const sendEmail = (emailDetails, callback) => {
  mailTransport.sendMail(emailDetails, callback);
};

const generateEmailDetails = (name, email, message) => {
  const emailDetails = {
    from: `Mail Admin <${process.env.EMAIL_ADDRESS}>`,
    to: "madushan.sooriyarathne@outlook.com",
    subject: `New Email from ${name}`,
    html: `<h4>New Email from <span style="background-color: #ff9900;">${name}</span></h4>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p>&nbsp;</p>
        <p>Cheers,</p>
        <p>Mail Admin.</p>`,
  };

  return emailDetails;
};

export { sendEmail, generateEmailDetails };

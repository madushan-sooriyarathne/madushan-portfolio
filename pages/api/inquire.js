import { generateEmailDetails, sendEmail } from "../../utils/emailHandler";

const handler = (req, res) => {
  if (req.method === "GET")
    req.status(405).json({ message: "method not allowed", status: "error" });
  const { name, email, message } = req.body;

  if (name && email && message) {
    const emailDetails = generateEmailDetails(name, email, message);

    // send the email
    sendEmail(emailDetails, (err, info) => {
      if (err) {
        console.error(err.message);
        res.status(503).json({
          message: "Error sending email. Internal server error",
          status: "error",
        });
      } else {
        console.log(`Email sent successfully - emailId: ${info.messageId}`);

        // send success status
        res.status(200).json({
          message: "successfully sent the message",
          status: "success",
        });
      }
    });
  } else {
    console.warn("Invalid data");
    res.status(406).json({
      message: "data cannot be accepted - missing or mis-formatted",
      status: "error",
    });
  }
};

export default handler;

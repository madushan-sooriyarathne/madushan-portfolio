import { NextApiRequest, NextApiResponse } from "next";
import { generateEmailDetails, sendEmail } from "../../utils/emailHandler";

interface ResponseType {
  message: string;
  status: string;
}

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
): void => {
  if (req.method === "POST") {
    const {
      name,
      email,
      message,
    }: { name: string; email: string; message: string } = req.body;

    if (name && email && message) {
      const emailDetails: EmailDetails = generateEmailDetails(
        name,
        email,
        message
      );

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
  } else {
    res.status(405).json({ message: "method not allowed", status: "error" });
  }
};

export default handler;

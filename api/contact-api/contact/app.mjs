import {SES} from "@aws-sdk/client-ses";

let ses = new SES({region: 'eu-west-2'});

const SUBJECT = "Augustetom.com CONTACT FORM REPLY"
const FROM_EMAIL = process.env.FROM_EMAIL;
const TO_EMAIL = process.env.TO_EMAIL;

const sendMail = async (subject, message, email) => {
  const emailParams = {
    Destination: {
      ToAddresses: [TO_EMAIL],
    },
    Message: {
      Body: {
        Text: {Data: `from: ${email}\n\nmessage: ${message}`},
      },
      Subject: {Data: subject},
    },
    Source: FROM_EMAIL,
  };

  await ses.sendEmail(emailParams);
}

const createResponse = (statusCode, body) => ({
  statusCode,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST"
  },
  isBase64Encoded: false,
  body: JSON.stringify(body),
});

export const lambdaHandler = async (event, context) => {
  const {email, message} = JSON.parse(event.body);
  try {
    await sendMail(SUBJECT, message, email)

    console.log("MAIL SENT SUCCESSFULLY!!");

    return createResponse(200, {message: "Email sent successfully"})
  } catch (e) {
    console.log("FAILURE IN SENDING MAIL!!", e);

    return createResponse(500, {error: 'Internal Server Error'});
  }
};
  
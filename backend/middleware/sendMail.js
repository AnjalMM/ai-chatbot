import { createTransport } from "nodemailer";

const sendMail = async (email, subject, otp) => {
  const transport = createTransport({
   service : 'gmail',
   auth : {
    user : process.env.Gmail,
    pass : process.env.password,
   }
  });


  const html =  `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OTP Verification</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .container {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            text-align: center;
        }
        h1 {
            color: white;
        }
        p {
            margin-bottom: 20px;
            color: #666;
        }
        .otp {
            font-style:bold;
            font-size: 36px;
            color: green; /* Purple text */
            margin-bottom: 30px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>OTP VERIFICATION</h1>
        <p>Hai ${email} </p>
       <p> Welcome to "ZARA" Here’s your One-Time Password (OTP) to verify your account:</p>
        <p class="otp">${otp}</p> 
        <P>If you didn’t request this, you can ignore this email.</P>
        <P>Thank you,</P>
        <P>Team ZARA</P>
    </div>
</body>
 </html>
`;

  await transport.sendMail({
    from: process.env.Gmail,
    to: email,
    subject,
    html,
  });
};

export default sendMail;

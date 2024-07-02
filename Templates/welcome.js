module.exports.Welcome = (firstName) => {
  return `<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      font-family: Arial, sans-serif;
      margin: 0 auto;
      padding: 20px;
      max-width: 600px;
    }
    .header {
      background-color: #f8f8f8;
      padding: 20px;
      text-align: center;
      border-bottom: 1px solid #e7e7e7;
    }
    .content {
      margin: 20px 0;
    }
    .footer {
      background-color: #f8f8f8;
      padding: 20px;
      text-align: center;
      border-top: 1px solid #e7e7e7;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="content">
      <p>Hi ${firstName},</p>
      <p>Welcome to <strong>Trustleger</strong>!</p>
       <p>We are thrilled to have you on board. At Trustleger, we strive as cutting-edge decentralized digital banking system designed to revolutionize the way you secure your finance.</p>
      <p>If you have any questions or need assistance, feel free to reach out to our support team at <a href="mailto:support@trustleger.com">[support email]</a>.</p>
      <p>Thank you for joining us.</p>
    </div>
    <div class="footer">
      <p>Best regards,<br>
      The Trustleger Team</p>
    </div>
  </div>
</body>
</html>
`;
};

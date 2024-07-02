module.exports.Transaction = (firstName, amount, type) => {
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
    .button {
      display: inline-block;
      padding: 10px 20px;
      font-size: 16px;
      color: white;
      background-color: #4CAF50;
      text-align: center;
      border-radius: 5px;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Transaction Confirmation</h1>
    </div>
    <div class="content">
      <p>Hi ${firstName},</p>
      <p>We are pleased to inform you that your transaction has been successfully processed. Below are the details of your transaction:</p>
      <ul>
        <li><strong>Amount:</strong> $ ${amount}</li>
        <li><strong>Transaction Type:</strong> ${type}</li>
      </ul>
      <p>Thank you for using Trustleger for your financial needs. If you have any questions or need further assistance, feel free to reach out to our support team at <a href="mailto:support@trustleger.com">support@trustleger.com</a>.</p>
      <p>Best regards,</p>
      <p>The Trustleger Team</p>
    </div>
    <div class="footer">
      <p>For more information, visit our <a href="https://trustleger.com">website</a> or contact us at <a href="mailto:support@trustleger.com">support@trustleger.com</a>.</p>
      <a href="https://trustleger.com/login" class="button">Go to Dashboard</a>
    </div>
  </div>
</body>
</html>
`;
};

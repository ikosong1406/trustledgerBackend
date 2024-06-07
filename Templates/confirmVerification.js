exports.confirmVerification = (heading, message) => {
  return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Our App!</title>
  <style>
    /* Reset styles for email compatibility */
    body,
    body * {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }

    /* Container styles */
    .container {
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
      background-color: #f8f8f8;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    /* Header styles */
    .header {
      background-color: #021023;
      color: #ffffff;
      padding: 20px;
      text-align: center;
    }

    .header img {
      max-width: 150px;
      margin-bottom: 10px;
    }

    .header h1 {
      color:  #f8f8f8;
      font-size: 24px;
      margin-bottom: 10px;
    }

    /* Body styles */
    .body-content {
      margin-bottom: 20px;
      padding: 10px;
    }

    .body-content p {
      color: #555555;
      font-size: 16px;
      line-height: 1.5;
      margin-bottom: 10px;
    }

    /* Call to action button styles */
    .cta-button {
      display: inline-block;
      padding: 10px 20px;
      background: rgb(17, 33, 45);
      background: linear-gradient(
        153deg,
        rgba(17, 33, 45, 1) 0%,
        rgba(5, 38, 89, 1) 100%
      );background-color: #007bff;
      color: #ffffff;
      text-decoration: none;
      border-radius: 5px;
      transition: background-color 0.3s ease;
    }

    .cta-button:hover {
      background-color: #0056b3;
    }

    /* Footer styles */
    .footer {
      text-align: center;
      color: #999999;
      font-size: 14px;
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="header">
      <h1>Email Confirmed!</h1>
    </div>
    <div class="body-content">
      <p>${heading}</p>
      <p>${message}</p>
    </div>
    <div class="footer">
      <p>If you have any questions or need assistance, feel free to contact us at <a href="mailto:support@example.com">support@example.com</a>.</p>
      <p>Thank you,<br> Trust Ledger Team</p>
    </div>
  </div>
</body>

</html>`;
};

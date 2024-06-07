exports.verifyCode = (code) => {
  return `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Email Template</title>
        <style>
          /* Reset styles */
          body, h1, h2, p {
            margin: 0;
            padding: 0;
          }
      
          /* Global styles */
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
          }
      
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
            background-color: #420c8e;
            color: #ffffff;
            padding: 20px;
            text-align: center;
          }

          .header img {
            max-width: 150px;
            margin-bottom: 10px;
          }
      
          .header h1 {
            color: #f8f8f8;
            font-size: 24px;
            margin-bottom: 10px;
          }
      
          /* Body content styles */
          .body-content {
            margin-bottom: 20px;
            padding: 10px;
          }
      
          .body-content h2 {
            color: #333333;
            margin-bottom: 20px;
          }
      
          .body-content p {
            color: #555555;
            font-size: 16px;
            line-height: 1.5;
            margin-bottom: 10px;
          }
      
          .verification-code {
            font-size: 24px;
            font-weight: bold;
            color: #007bff;
            margin-top: 20px;
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
            <h1>Verification code</h1>
          </div>
          <div class="body-content">
            <p>Your verification code is:</p>
            <div class="verification-code">${code}</div>
          </div>
          <div class="footer">
          <p>If you have any questions or need assistance, feel free to contact us at <a href="mailto:support@example.com">support@example.com</a>.</p>
          <p>Thank you,<br> Bitnex Team</p>
        </div>
      </body>
      </html>`;
};

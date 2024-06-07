exports.passwordReset = (url) => {
  return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Password Reset</title>
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
          color:  #f8f8f8;
          font-size: 24px;
          margin-bottom: 10px;
        }
    
        /* Body styles */
        .body-content {
          margin-bottom: 20px;
          padding:10px;
        }
    
        .body-content p {
          color: #555555;
          font-size: 16px;
          line-height: 1.5;
          margin-bottom: 10px;
        }
    
        /* Button styles */
        .button {
          display: inline-block;
          padding: 10px 20px;
          background-color: #420c8e;
          color: #ffffff;
          text-decoration: none;
          border-radius: 5px;
          transition: background-color 0.3s ease;
        }
    
        .button:hover {
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
          <h1>Password Reset</h1>
        </div>
        <div class="body-content">
          <p>You recently requested to reset your password for your account. Click the link below to reset it:</p>
          <a href="${url}" class="button">Reset Password</a>
          <p>If you did not request a password reset, please ignore this email or contact support.</p>
        </div>
        <div class="footer">
          <p>If you have any questions or need assistance, feel free to contact us at <a href="mailto:support@example.com">support@example.com</a>.</p>
          <p>Thank you,<br> Bitnex Team</p>
        </div>
      </div>
    </body>
    
    </html>
    `;
};

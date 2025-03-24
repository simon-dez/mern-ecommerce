import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
} from "./emailTemplate.js";
import { mailtrapClient, recipient, sender } from "../config/mailtrap.js";


export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Account Verification",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verification",
    });
    console.log("Verfication Email sent successfully", response);
  } catch (error) {
    console.log("Error sending verification email", error);
    throw new Error(`Error sending verification email: ${error}`);
  }
};


export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      template_uuid: "7fdeff0f-42c7-413f-af8f-35255891519c",
      template_variables: {
        company_info_name: "DEDSV",
        name: name,
      },
    });
    console.log("Welcome, Email sent successfully", response);
  } catch (error) {
    console.error(`Error sending welcome email`, error);
    throw new Error(`Error sending welcome email: ${error}`);
  }
};


export const sendPasswordResetEmail = async (email, resetURL) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Reset Password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
      category: "Password Reset",
    });
  } catch (error) {
    console.error(`Error sending password reset email`, error);
    throw new Error(`Error sending password reset email: ${error}`);
  }
};


export const sendResetSuccessEmail = async (email) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Password Reset Successful",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
      category: "Password Reset",
    });
    console.log("Password reset email sent successfully", response);
  } catch (error) {
    console.error(`Error sending password reset success email`, error);
    throw new Error(`Error sending password reset success email: ${error}`);
  }
};


export const sendOrderConfirmation = async (email, _id) => {
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Order Confirmation",
      html: `
        <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Order Confirmation</title>
  <style>
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
    
    @keyframes slideIn {
      from { transform: translateX(-20px); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes shimmer {
      0% { background-position: -100% 0; }
      100% { background-position: 100% 0; }
    }
    
    body {
      font-family: 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
      animation: fadeIn 0.8s ease-out;
    }
    
    .order-container {
      background-color: white;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      padding: 30px;
      position: relative;
      overflow: hidden;
    }
    
    .order-container::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 6px;
      background: linear-gradient(90deg, #2c8a56, #8adb92, #2c8a56);
      background-size: 200% 100%;
      animation: shimmer 3s infinite linear;
    }
    
    .header {
      text-align: center;
      margin-bottom: 25px;
      animation: fadeIn 1s ease-out;
    }
    
    .success-icon {
      width: 70px;
      height: 70px;
      margin: 0 auto 20px;
      background-color: #2c8a56;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: pulse 2s infinite;
    }
    
    .success-icon::before {
      content: "✓";
      color: white;
      font-size: 40px;
      font-weight: bold;
    }
    
    h2 {
      color: #2c8a56;
      margin-top: 0;
      font-size: 28px;
      animation: fadeIn 1.2s ease-out;
    }
    
    h3 {
      color: #444;
      border-bottom: 2px solid #eee;
      padding-bottom: 10px;
      margin-top: 30px;
      animation: fadeIn 1.4s ease-out;
      position: relative;
    }
    
    h3::after {
      content: "📦";
      position: absolute;
      right: 0;
      top: 0;
    }
    
    ul {
      padding-left: 5px;
      list-style-type: none;
    }
    
    li {
      margin-bottom: 15px;
      padding: 15px;
      border-radius: 8px;
      background-color: #f9f9f9;
      box-shadow: 0 2px 5px rgba(0,0,0,0.05);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      animation: slideIn 0.5s ease-out;
      animation-fill-mode: both;
    }
    
    li:hover {
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    }
    
    li:nth-child(1) { animation-delay: 0.6s; }
    li:nth-child(2) { animation-delay: 0.8s; }
    li:nth-child(3) { animation-delay: 1.0s; }
    li:nth-child(4) { animation-delay: 1.2s; }
    li:nth-child(5) { animation-delay: 1.4s; }
    
    .item-name {
      font-weight: bold;
      color: #2c8a56;
      font-size: 16px;
      display: flex;
      align-items: center;
    }
    
    .item-name::before {
      content: "🛍️";
      margin-right: 8px;
    }
    
    .item-details {
      display: flex;
      justify-content: space-between;
      max-width: 250px;
      margin-top: 5px;
      color: #666;
    }
    
    .footer {
      text-align: center;
      margin-top: 30px;
      color: #777;
      font-size: 14px;
      padding-top: 20px;
      border-top: 1px dashed #eee;
      animation: fadeIn 1.8s ease-out;
    }
    
    .confetti {
      position: absolute;
      width: 10px;
      height: 10px;
      opacity: 0;
    }
    
    .tracking-number {
      background-color: #f0f7f3;
      border: 1px dashed #2c8a56;
      border-radius: 4px;
      padding: 10px;
      margin: 20px 0;
      text-align: center;
      font-family: monospace;
      font-size: 16px;
      letter-spacing: 1px;
      animation: pulse 2s infinite;
    }
    
    .thank-you-message {
      font-style: italic;
      margin-top: 20px;
      color: #2c8a56;
    }
  </style>
</head>
<body>
  <div class="order-container">
    <div class="header">
      <div class="success-icon"></div>
      <h2>Thank you for your order!</h2>
      <p>Your order has been received and is being processed.</p>
    </div>
    
    <div class="tracking-number">
      Order #: TR-${Math.floor(Math.random()*900000) + 100000}
    </div>
    
    <h3>Order Details:</h3>
    <ul>
      ${_id
        .map(
          (item) =>
            `<li>
              <div class="item-name">${item.name}</div>
              <div class="item-details">
                <span>Quantity: ${item.quantity}</span>
                <span>Price: $${item.price}</span>
              </div>
            </li>`
        )
        .join("")}
    </ul>
    
    <div class="footer">
      <p>We will notify you once your order is shipped.</p>
      <p>If you have any questions, please contact our customer support.</p>
      <p class="thank-you-message">We appreciate your business!</p>
    </div>
  </div>

  <script>
    // Create confetti animation
    function createConfetti() {
      const colors = ['#2c8a56', '#8adb92', '#ffcc00', '#ff6b6b'];
      const confettiCount = 80;
      
      for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
          const confetti = document.createElement('div');
          confetti.classList.add('confetti');
          
          // Random styling
          confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
          confetti.style.left = Math.random() * 100 + '%';
          confetti.style.top = '0';
          confetti.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';
          
          document.body.appendChild(confetti);
          
          // Animate falling
          confetti.animate([
            { top: '-10px', opacity: 1 },
            { top: '100vh', opacity: 0 }
          ], {
            duration: Math.random() * 2000 + 1500,
            easing: 'cubic-bezier(0,.9,.57,1)'
          });
          
          // Remove after animation
          setTimeout(() => {
            confetti.remove();
          }, 3500);
          
        }, Math.random() * 1000);
      }
    }
    
    // Run animations when page loads
    window.addEventListener('load', function() {
      createConfetti();
      
      // Add animation to list items
      const items = document.querySelectorAll('li');
      items.forEach((item, index) => {
        item.style.animationDelay = (0.6 + (index * 0.2)) + 's';
      });
    });
  </script>
</body>
      `,
    });

    console.log("Order confirmation email sent to:", email);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};


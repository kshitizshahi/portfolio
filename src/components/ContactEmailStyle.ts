import { Contact } from "@/types";

export function ContactEmailStyle({ name, email, subject, message }: Contact) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Request</title>
        <style>
          /* Reset styles for email clients */
          body, html, p, h1, h2, h3, h4, h5, h6, ul, li {
            margin: 0;
            padding: 0;
          }
          
          body {
            margin: 0;
            padding: 0;
            background-color: #f9fafb;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: #1f2937;
            -webkit-text-size-adjust: 100%;
          }
          
          /* Main container */
          .email-container {
            max-width: 600px;
            margin: 40px auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 25px rgba(0,0,0,0.05);
          }
          
          /* Header section */
          .header {
            background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
            padding: 30px 24px;
            text-align: center;
          }
          
          .header h1 {
            color: #ffffff;
            font-size: 24px;
            font-weight: 700;
            margin: 0;
            letter-spacing: 0.2px;
          }
          
          .header-icon {
            font-size: 36px;
            margin-bottom: 12px;
          }
          
          /* Content area */
          .content {
            padding: 30px 24px;
          }
          
          .section {
            margin-bottom: 24px;
          }
          
          .section:last-child {
            margin-bottom: 0;
          }
          
          .label {
            font-weight: 600;
            color: #4b5563;
            margin-bottom: 6px;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          
          .value {
            font-size: 16px;
            color: #1f2937;
            line-height: 1.6;
            padding: 0 0 0 8px;
            border-left: 3px solid #e5e7eb;
          }
          
          .message-container {
            margin-top: 8px;
          }
          
          .message-box {
            background-color: #f3f4f6;
            padding: 20px;
            border-radius: 8px;
            white-space: pre-wrap;
            color: #1f2937;
            font-size: 15px;
            border-left: 4px solid #3b82f6;
            line-height: 1.6;
          }
          
          /* Footer */
          .footer {
            background-color: #f9fafb;
            padding: 20px 24px;
            text-align: center;
            font-size: 13px;
            color: #6b7280;
            border-top: 1px solid #e5e7eb;
          }
          
          .footer p {
            margin: 0;
            line-height: 1.5;
          }
          
          /* Links */
          a {
            color: #2563eb;
            text-decoration: none;
            font-weight: 500;
          }
          
          a:hover {
            text-decoration: underline;
          }
          
          /* Time stamp */
          .timestamp {
            font-size: 12px;
            color: #9ca3af;
            margin-top: 8px;
          }
          
          /* Responsive design */
          @media only screen and (max-width: 480px) {
            .email-container {
              width: 100% !important;
              margin: 20px auto;
            }
            
            .content, .header, .footer {
              padding: 20px 16px;
            }
            
            .header h1 {
              font-size: 22px;
            }
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <div class="header-icon">📨</div>
            <h1>New Contact Request</h1>
          </div>
          
          <div class="content">
            <div class="section">
              <div class="label">From</div>
              <div class="value">${name}</div>
            </div>
            
            <div class="section">
              <div class="label">Email Address</div>
              <div class="value">
                <a href="mailto:${email}">${email}</a>
              </div>
            </div>
            
            <div class="section">
              <div class="label">Subject</div>
              <div class="value">${subject}</div>
            </div>
            
            <div class="section">
              <div class="label">Message</div>
              <div class="message-container">
                <div class="message-box">${message}</div>
              </div>
              <div class="timestamp">
                Received on ${new Date().toLocaleString("en-US", {
                  timeZone: "America/New_York", // US Eastern Time
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>
          </div>
          
          <div class="footer">
            <p>This message was sent through your portfolio contact form</p>
            <p style="margin-top: 8px;">© ${new Date().getFullYear()} Your Portfolio. All rights reserved.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

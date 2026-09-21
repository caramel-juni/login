document.body.ineerHTML = `<!DOCTYPE html>
<html>
  <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f9f9f9; color: #333;">
    <table align="center" width="600" style="border-collapse: collapse; margin: 20px auto; background-color: #ffffff; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
      <!-- Header section -->
      <tr>
        <td style="padding: 20px; text-align: center; background-color: #6ccef7; color: white; font-size: 24px; font-weight: bold;">
          <div><img src="https://app.literacyplanet.com/assets/lp-logo-bordered-sml-ea97c7ba.png" alt="LiteracyPlanet Logo"></div>
          Welcome to LiteracyPlanet!
        </td>
      </tr>
      <!-- Message section -->
      <tr>
        <td style="padding: 20px; text-align: left;">
          <p style="font-size: 18px; margin: 0; color: black;">Hi there!</p>
          <p style="font-size: 16px; margin: 10px 0; color: black;">We take your security seriously! Please re-enter your password to continue accessing your account.</p>
          
          <!-- Reauthentication form -->
          <form id="reauth-form" style="margin: 20px 0; text-align: center; font-weight:bold">
            <label for="password" style="display: block; margin-bottom: 10px; font-size: 16px; color: black;">Re-enter your password below:</label>
            <input
              type="password"
              id="password"
              name="password"
              style="width: 100%; max-width: 300px; padding: 10px; font-size: 16px; border: 1px solid #ccc; border-radius: 5px;"
              required
            />
            <button
              type="submit"
              style="margin-top: 20px; background-color: #6ccef7; color: white; text-decoration: none; padding: 12px 25px; border: none; border-radius: 5px; font-size: 16px; font-weight: bold; cursor: pointer;"
            >
              Reauthenticate
            </button>
          </form>
          
          <!-- Additional message -->
          <p style="font-size: 16px; margin: 20px 0; color: black;">
            If you didn't expect this prompt or need further assistance, please contact us immediately at <a href="https://literacyplanet.com/support" style="color: #6bc4ff; text-decoration: none;">literacyplanet.com/support</a>.
          </p>
        </td>
      </tr>
      <!-- Footer section -->
      <tr>
        <td style="padding: 20px; text-align: center; background-color: #f4f4f4; font-size: 14px; color: #666;">
          <p style="margin: 0;">Having trouble? <a href="mailto:support@LiteracyPlanet.com" style="color: #6ccef7; text-decoration: none;">Contact our support team</a></p>
          <p style="margin: 10px 0;">© 2026 LiteracyPlanet Inc. All rights reserved.</p>
        </td>
      </tr>
    </table>
  </body>
</html><!--`

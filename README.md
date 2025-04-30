# Tracking Pixel Server

A simple Node.js + Express server to serve a 1x1 transparent tracking pixel that logs:

- Time and date when an email is opened
- IP address of the recipient
- User-Agent (browser/device info)
- Approximate location using IP geolocation

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/tracking-pixel-server.git
   ```

2. Navigate to the project folder:
   ```bash
   cd tracking-pixel-server
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Replace `YOUR_IPINFO_TOKEN` in `tracking-pixel-server.js` with your actual token from [ipinfo.io](https://ipinfo.io/signup).

5. Start the server:
   ```bash
   npm start
   ```

6. Access the pixel endpoint:
   ```bash
   https://your-domain.com/pixel.png
   ```

## Deployment

- Recommended to deploy on [Render.com](https://render.com/) or any Node.js hosting platform.

## Usage in Email

Embed the tracking pixel in an email:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Test Email</title>
    </head>
    <body>
        <p>Hi there,</p>

        <p>This is a sample email to test the tracking pixel.</p>

        <p>Best regards,<br>
        Shahzaib</p>

        <!-- Tracking Pixel (1x1 transparent image) -->
        <img src="https://tracking-pixel-server-qhdb.onrender.com/pixel.png" width="1" height="1" style="display:none;" alt="." />

    </body>
</html>

```

## License

ISC License

---

Developed by **Mohd. Shahzaib Hussain** 🚀

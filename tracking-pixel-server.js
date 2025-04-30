const express = require('express');
const axios = require('axios');
const app = express();

const PORT = process.env.PORT || 3000;

app.set('trust proxy', true);

app.get('/pixel.png', async (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const userAgent = req.headers['user-agent'];
  const timestamp = new Date().toISOString();

  console.log(req)

  let location = {};

  try {
    const response = await axios.get(`https://ipinfo.io/${ip}/json?token=99aec6bd3e9f52`);
    location = response.data;
  } catch (error) {
    console.error('Failed to fetch location:', error.message);
  }

  console.log('Email Opened: ', {
    time: timestamp,
    ip,
    userAgent,
    location
  });

  // Send a 1x1 transparent pixel
  const pixel = Buffer.from(
    'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==',
    'base64'
  );

  res.set('Content-Type', 'image/png');
  res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.send(pixel);
});

app.listen(PORT, () => console.log(`Tracking Pixel Server running on port ${PORT}`));
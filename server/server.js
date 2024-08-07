const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;  // Ensure the correct port is used in production

// Allow requests only from your frontend URL
const corsOptions = {
  origin: 'https://dynamic-h1-backend-client.vercel.app', // Your frontend URL
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(express.json()); // Built-in JSON parser
app.use(express.urlencoded({ extended: true })); // Built-in URL-encoded parser

let h1Text = 'Original H1 Text';

app.get('/api/h1-text', (req, res) => {
  res.json({ h1Text });
});

app.post('/api/update-h1', (req, res) => {
  const { newText } = req.body;
  if (newText) {
    h1Text = newText;
    res.json({ success: true, h1Text });
  } else {
    res.status(400).json({ success: false, message: 'No text provided' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

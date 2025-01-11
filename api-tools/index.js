const express = require('express');
const swaggerUi = require('swagger-ui-express');
const { generateEndpoint } = require('./generators/endpoint');

const app = express();

app.use(express.json());

app.post('/generate-endpoint', async (req, res) => {
  try {
    const { path, method, params } = req.body;
    const endpoint = await generateEndpoint({ path, method, params });
    res.json({ success: true, endpoint });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API Tools running on port ${PORT}`);
});

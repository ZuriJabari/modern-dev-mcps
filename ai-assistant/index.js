const express = require('express');
const { analyzeCode } = require('./services/code-analyzer');
const { generateDocs } = require('./services/doc-generator');
const { securityScan } = require('./services/security-scanner');

const app = express();
app.use(express.json());

app.post('/analyze', async (req, res) => {
  try {
    const { code, type } = req.body;
    const analysis = await analyzeCode(code, type);
    res.json(analysis);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/generate-docs', async (req, res) => {
  try {
    const { code, format } = req.body;
    const docs = await generateDocs(code, format);
    res.json(docs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/security-scan', async (req, res) => {
  try {
    const { code } = req.body;
    const vulnerabilities = await securityScan(code);
    res.json(vulnerabilities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`AI Assistant running on port ${PORT}`);
});

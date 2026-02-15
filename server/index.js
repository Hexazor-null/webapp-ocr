const express = require('express');
const cors = require('cors');
const Tesseract = require('tesseract.js');

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' })); // Penting untuk terima gambar besar

app.post('/api/scan', async (req, res) => {
  const { image } = req.body;
  if (!image) return res.status(400).json({ error: "Gambar tidak ada" });

  try {
    // Proses OCR pakai Tesseract
    const { data: { text } } = await Tesseract.recognize(image, 'ind');
    
    // Cari angka nominal harga di atas 1000
    const prices = text.match(/\d{4,}/g) || [];
    const maxPrice = prices.length > 0 ? Math.max(...prices.map(Number)) : 0;

    res.json({
      text: text,
      detectedPrice: maxPrice
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3001, () => console.log('🚀 Server Reconcile di Port 3001'));

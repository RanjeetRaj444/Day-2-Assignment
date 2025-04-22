const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

const router = express.Router();
const UPLOADS_DIR = path.join(__dirname, '../uploads');
if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, UPLOADS_DIR);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, crypto.randomUUID() + ext);
  }
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png'];
  if (!allowedTypes.includes(file.mimetype)) {
    return cb(new Error('Only JPEG and PNG files are allowed'));
  }
  cb(null, true);
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: process.env.MAX_SIZE_MB * 1024 * 1024 || 2 * 1024 * 1024 }
});

router.post('/upload', upload.single('image'), (req, res) => {
  const fileUrl = `http://localhost:${process.env.PORT || 3000}/uploads/${req.file.filename}`;
  res.json({ url: fileUrl });
});

router.use((err, req, res, next) => {
  if (err instanceof multer.MulterError || err.message) {
    return res.status(422).json({ error: err.message });
  }
  next(err);
});

router.get('/storage', (req, res) => {
  fs.readdir(UPLOADS_DIR, (err, files) => {
    if (err) return res.status(500).json({ error: "Failed to read storage." });
    let total = 0;
    files.forEach(file => {
      const { size } = fs.statSync(path.join(UPLOADS_DIR, file));
      total += size;
    });
    res.json({ totalBytes: total });
  });
});

module.exports = router;

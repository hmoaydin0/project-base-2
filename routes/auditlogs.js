const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
  res.json({
    body: req.body,
    params: req.params,
    query: req.query,
    headers: req.headers
  });
});

// Proje tutarlılığı için 'module.exports' yerine 'export default' kullanın
module.exports = router;
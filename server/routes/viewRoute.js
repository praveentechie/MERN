import express from 'express';
import path    from 'path';

let router = express.Router();

router.get('/', function (req, res) {
  res.sendFile('home.html', { root: path.join(__dirname, '../') });
});

module.exports = router;

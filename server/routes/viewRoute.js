import express from 'express';
import path    from 'path';

let router = express.Router();

router.get('/', function (req, res) {
  console.log('req', req.session_ap);
  res.sendFile('home.html', { root: path.join('../views') });
});

module.exports = router;

import express from 'express';
import path    from 'path';
import User    from '../modals/UserList';

let router = express.Router();

router.get('/', function (req, res) {
  User.find({}, function(err, data) {
    res.json(data);
  });
});

module.exports = router;

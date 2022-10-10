var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('../views/layouts/thesinhvien.ejs', { title: 'the sinh vien' });
});

module.exports = router;

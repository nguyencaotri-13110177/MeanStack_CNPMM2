var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var HangDienThoai = require('../models/hangdienthoai.js');

/* Lay danh sach tat ca hangdienthoai */
router.get('/', function(req, res, next) {
  HangDienThoai.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

module.exports = router;

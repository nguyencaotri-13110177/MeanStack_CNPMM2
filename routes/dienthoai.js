var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var DienThoai = require('../models/dienthoai.js');

/* Lay danh sach tat ca dienthoai */
router.get('/', function(req, res, next) {
  DienThoai.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* Lay danh sach dien thoai theo hang */
router.get('/hang/:hang', function(req, res, next) {
  DienThoai.find({hang:req.params.hang},function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* Lay dienthoai theo ID */
router.get('/:id', function(req, res, next) {
  DienThoai.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/*Luu dienthoai */
router.post('/', function(req, res, next) {
  DienThoai.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Update dienthoai */
router.put('/:id', function(req, res, next) {
  DienThoai.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Xoa dien thoai */
router.delete('/:id', function(req, res, next) {
  DienThoai.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* Tim dien thoai theo text (text-search) */
router.get('/search/:text', function(req, res, next) {
  DienThoai.find({ $text: { $search: req.params.text } },function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

module.exports = router;

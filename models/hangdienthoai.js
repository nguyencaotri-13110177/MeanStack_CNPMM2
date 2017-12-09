var mongoose = require('mongoose');

var HangDienThoaiSchema = new mongoose.Schema({
  ten: String,
});

module.exports = mongoose.model('hangdienthoai', HangDienThoaiSchema);
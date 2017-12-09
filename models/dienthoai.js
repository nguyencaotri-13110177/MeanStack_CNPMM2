var mongoose = require('mongoose');

var DienThoaiSchema = new mongoose.Schema({
  ten: String,
  hang: String,
  gia:String,
  ram: String,
  bonhotrong: String,
  thenho: String,
  wifi:String,
  bangtan:String,
  thietke:String,
  hinh:String,
  cameratruoc:String,
  camerasau:String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('dienthoai', DienThoaiSchema);
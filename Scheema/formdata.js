const mongoose = require("mongoose")

const OrderSchema = mongoose.Schema({
  adult:String,
  child : String,
  name : String,
  phone : String,
  email : String,
  datesfirst : String,
  datessecond : String,
  property : String
  });

module.exports = mongoose.model('Order', OrderSchema);


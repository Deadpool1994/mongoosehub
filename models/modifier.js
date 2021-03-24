/*!
 * Module dependencies
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Menu schema
 * {
  "id": "<modifier_id>",
  "name": "<modifier_name>",
  "availableStatus": "<AVAILABLE|UNAVAILABLE>",
  "price": 20
}
 */

const ModifierSchema = new Schema({
  name: {type: String, trim: true },
  availableStatus: {type: String, trim: true },
  price: { type: Number}
});


module.exports = mongoose.model('Modifier', ModifierSchema);

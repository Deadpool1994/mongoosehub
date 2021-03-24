/*!
 * Module dependencies
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Category schema
 * {
  "id": "<category_id>",
  "name": "<category_name>",
  "availableStatus": "<AVAILABLE|UNAVAILABLE|HIDE>",
  "items": [], // for Food
}
 */

const CategorySchema = new Schema({
  name: {type: String, trim: true },
  availableStatus: {type: String, trim: true },
  items: [{type:Schema.Types.ObjectId, ref:'Item'}]
});


module.exports = mongoose.model('Category', CategorySchema);

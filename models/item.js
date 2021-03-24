/*!
 * Module dependencies
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * ModifierGroup schema
 * {
  "id": "<item_id>",
  "name": "<item_name>",
  "availableStatus": "<AVAILABLE|UNAVAILABLE>",
  "description": "<optional item description>",
  "price": 1000,
  "photos": ["https://food.com/burger.jpg"],
  "specialType": "alcohol"
}
 */

const ItemSchema = new Schema({
  name: {type: String, trim: true },
  availableStatus: {type: String, trim: true },
  description: {type: String, trim: true },
  price: { type: Number},
  photos: [String],
  specialType: {type: String, trim: true},
  modifierGroups: [{type:Schema.Types.ObjectId, ref:'ModifierGroup'}]
});


module.exports = mongoose.model('Item', ItemSchema);

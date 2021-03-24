/*!
 * Module dependencies
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * ModifierGroup schema
 * {
  "id": "<modifier_group_id>",
  "name": "<modifier_group_name>",
  "availableStatus": "<AVAILABLE|UNAVAILABLE>",
  "selectionRangeMin": 0,
  "selectionRangeMax": 1
}
 */

const ModifierGroupSchema = new Schema({
  name: {type: String, trim: true },
  availableStatus: {type: String, trim: true },
  selectionRangeMin: { type: Number},
  selectionRangeMax: { type: Number},
  modifier: [{type:Schema.Types.ObjectId, ref:'Modifier'}]
});


module.exports = mongoose.model('ModifierGroup', ModifierGroupSchema);

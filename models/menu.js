/*!
 * Module dependencies
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Menu schema
 */

const MenuSchema = new Schema({
  currency: {
    code: {type: String, uppercase: true, trim: true },
    exponent: {type: Number},
    symbol: {type: String, trim: true }
  },
  sections: [{type:Schema.Types.ObjectId, ref:'Section'}]
});


module.exports = mongoose.model('Menu', MenuSchema);


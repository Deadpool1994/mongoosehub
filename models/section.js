/*!
 * Module dependencies
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Section schema
 * {
  "id": "<section_id>",
  "name": "<section_name>",
  "serviceHours": {
    "mon": {
      "openPeriodType": "OpenPeriod",
      "periods": [
        {
          "startTime": "10:00",
          "endTime": "22:00"
        }
      ]
    },
    "tue": {... <same fields as Monday> … },
    "wed": {...},
    "thu": {...},
    "fri": {....},
    "sat": {...},
    "sun": {....}
  },
  "categories": []
}
 */

const SectionSchema = new Schema({
  name: {type: String, trim: true },
  availableStatus: {type: String, trim: true },
  serviceHours: {
    mon: {
      openPeriodType: {type: String, trim: true },
      periods: [{
        startTime: {type: String, trim: true },
        endTime: {type: String, trim: true }
      }]
    },
    tue: {
      openPeriodType: {type: String, trim: true },
      periods: [{
        startTime: {type: String, trim: true },
        endTime: {type: String, trim: true }
      }]
    },
    wed: {
      openPeriodType: {type: String, trim: true },
      periods: [{
        startTime: {type: String, trim: true },
        endTime: {type: String, trim: true }
      }]
    },
    thu: {
      openPeriodType: {type: String, trim: true },
      periods: [{
        startTime: {type: String, trim: true },
        endTime: {type: String, trim: true }
      }]
    },
    fri: {
      openPeriodType: {type: String, trim: true },
      periods: [{
        startTime: {type: String, trim: true },
        endTime: {type: String, trim: true }
      }]
    },
    sat: {
      openPeriodType: {type: String, trim: true },
      periods: [{
        startTime: {type: String, trim: true },
        endTime: {type: String, trim: true }
      }]
    },
    sun: {
      openPeriodType: {type: String, trim: true },
      periods: [{
        startTime: {type: String, trim: true },
        endTime: {type: String, trim: true }
      }]
    }
  },
  categories: [{type:Schema.Types.ObjectId, ref:'Category'}]
});


module.exports = mongoose.model('Section', SectionSchema);

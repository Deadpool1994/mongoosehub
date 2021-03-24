'use strict';

require('dotenv').config();

const port = 3017;
    
function connect() {
  var options = { keepAlive: 1, useNewUrlParser: true };
  mongoose.connect(process.env.MONGODB_URL, options);
  return mongoose.connection;
}


const express = require('express');
const bodyParser= require('body-parser')
const app = express();
const mongoose = require('mongoose');
const Modifier = require('./models/modifier');
const ModifierGroup = require('./models/modifierGroup');
const Item = require('./models/item');
const Category = require('./models/category');
const Section = require('./models/section');
const Menu = require('./models/menu.js');

const connection = connect();

connection
  .on('error', console.log)
  .on('disconnected', connect)
  .once('open', ()=>{console.log(`db connected`)});
    
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, function() {
  console.log(`listening on ${port}`)
})

app.get('/', (req, res) => {
  res.send('Hello World')
})

/**
 * menu_id - ObjectId of the menu
 * section_id - ObjectId of the section
 */
app.get('/v1/menus/:menu_id/sections/:section_id', async (req, res) => {
  
  var ObjectId = mongoose.Types.ObjectId;
  if(!ObjectId.isValid(req.params.menu_id)) {
    return res.send('The menu_id is not correct');
  }
  if(!ObjectId.isValid(req.params.section_id)) {
    return res.send('The section_id is not correct');
  }

  try {
    
      var r = await Menu.findById(req.params.menu_id).populate(
        {path: 'sections',
        match: {
          _id: req.params.section_id
      },
        populate: { path: 'categories',model: 'Category',
        populate: { path: 'items',model: 'Item',
        populate: { path: 'modifierGroups',model: 'ModifierGroup',
        populate: { path: 'modifier',model: 'Modifier'
        }}}}}).exec();
    
      return res.send(r);
  } catch (error) {
    console.log("Error while query: ",error);
    return res.send("Sorry Server Error");
  }

})

/**
 * 
 * please uncomment save function to create dummy data
 */
// save();

/**
 * This function will create a dummy data of the required data in local mongoDB
 */
   async function save(){

    const modifier  = new Modifier({
      "name": "modifier-1",
      "availableStatus": "AVAILABLE",
      "price": 20
     });

     var result = await modifier.save();
      // console.log('modifier: ',result);

      const modifier2  = new Modifier({
        "name": "modifier-2",
        "availableStatus": "AVAILABLE",
        "price": 20
       });
  
       var result3 = await modifier2.save();
        // console.log('modifier2: ',result3);

     const modifierGroup  = new ModifierGroup({
       "name": "modifier-group-2",
       "availableStatus": "AVAILABLE",
       "selectionRangeMin": 0,
       "selectionRangeMax": 7,
       "modifier": [result._id,result3._id]
      });
      
      result = await modifierGroup.save();
      // console.log('modifierGroup: ',result);

      const item = new Item;
      item.name = "Pizza";
      item.availableStatus = "AVAILABLE";
      item.description = "A simple Italian Pizza";
      item.price = 1500;
      item.photos = ["https://food.com/pizza.jpg"];
      item.specialType = "alcohol";
      item.modifierGroups = [result._id]
  
      result = await item.save();
      // console.log('item: ',result);

      const category  = new Category({
        "name": "Promotion",
        "availableStatus": "AVAILABLE",
        "items": [result._id]
       });
       
       result = await category.save();
      //  console.log('category: ',result);

       const section  = new Section({
        "name": "Lunch",
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
            "tue": {
              "openPeriodType": "OpenPeriod",
              "periods": [
                {
                  "startTime": "10:00",
                  "endTime": "22:00"
                }
              ]
            },
            "wed": {
              "openPeriodType": "OpenPeriod",
              "periods": [
                {
                  "startTime": "10:00",
                  "endTime": "22:00"
                }
              ]
            },
            "thu": {
              "openPeriodType": "OpenPeriod",
              "periods": [
                {
                  "startTime": "10:00",
                  "endTime": "22:00"
                }
              ]
            },
            "fri": {
              "openPeriodType": "OpenPeriod",
              "periods": [
                {
                  "startTime": "10:00",
                  "endTime": "22:00"
                }
              ]
            },
            "sat": {
              "openPeriodType": "OpenPeriod",
              "periods": [
                {
                  "startTime": "10:00",
                  "endTime": "22:00"
                }
              ]
            },
            "sun": {
              "openPeriodType": "OpenPeriod",
              "periods": [
                {
                  "startTime": "10:00",
                  "endTime": "22:00"
                }
              ]
            },
        },
        "categories": [result._id]
       });
       
       result = await section.save();
      //  console.log('section: ',result);
       let sectionId = result._id;

       const section2  = new Section({
        "name": "Dinner",
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
            "tue": {
              "openPeriodType": "OpenPeriod",
              "periods": [
                {
                  "startTime": "10:00",
                  "endTime": "22:00"
                }
              ]
            },
            "wed": {
              "openPeriodType": "OpenPeriod",
              "periods": [
                {
                  "startTime": "10:00",
                  "endTime": "22:00"
                }
              ]
            },
            "thu": {
              "openPeriodType": "OpenPeriod",
              "periods": [
                {
                  "startTime": "10:00",
                  "endTime": "22:00"
                }
              ]
            },
            "fri": {
              "openPeriodType": "OpenPeriod",
              "periods": [
                {
                  "startTime": "10:00",
                  "endTime": "22:00"
                }
              ]
            },
            "sat": {
              "openPeriodType": "OpenPeriod",
              "periods": [
                {
                  "startTime": "10:00",
                  "endTime": "22:00"
                }
              ]
            },
            "sun": {
              "openPeriodType": "OpenPeriod",
              "periods": [
                {
                  "startTime": "10:00",
                  "endTime": "22:00"
                }
              ]
            },
        },
        "categories": []
       });
       
       var result2 = await section2.save();
      //  console.log('section2: ',result);

      const menu = new Menu;
      menu.currency = {
        "code": "SGD",
        "exponent": 2,
        "symbol": "S$"
      }
      menu.sections = [result._id,result2._id];

      result = await menu.save();
      // console.log('menu: ',result);

      console.log(`The Menus id is ${result._id} and section id is ${sectionId}`)
   }
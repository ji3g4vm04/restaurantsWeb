import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import restaurants from '../../../restaurant.json' assert { type: 'json' }
import Restaurant from '../restaurantModel.js';

dotenv.config();

const password = process.env.DATABASE_PASSWORD;
const DB = process.env.DATABASE.replace('<password>',password);

mongoose.connect(DB);
const DBconnect = mongoose.connection;

DBconnect.on('error',() => {
  console.log('connection error.')
})

DBconnect.once('open',() => {
  console.log('hello')
  restaurants.results.forEach(item => {
    delete item.id;
    Restaurant.create(item)
  })
})
import { Schema ,model } from "mongoose";

const restaurantSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  name_en: {
    type: String,
    require: true
  },
  category: {
    type: String,
    require: true
  },
  image: {
    type: String,
    require: true
  },
  location: {
    type: String,
    require: true
  },
  phone: {
    type: String,
    require: true
  },
  google_map: {
    type: String,
    require: true
  },
  rating:{
    type: Number,
    default: 4.1,
    max: [5.0, '評分上限為 5.0'],
    min: [1.0, '評分下限為 1.0']
  },
  description:{
    type: String,
    maxlength: 100
  }
})

const Restaurant = model('restaurant',restaurantSchema);

export default Restaurant;

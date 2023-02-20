import { Request, Response } from "express";
import restaurantFilter from '../utils/restaurantFilter.js';
import { restaurantResult } from "../interface/restaurant.js";
import Restaurant from "../models/restaurantModel.js";

interface FindObject {
  name? : RegExp;
  category? : RegExp;
}

const getRestaurants = async (req : Request, res : Response) => {
  const keyword : string = req.query.keyword as string;
  const type : string = req.query.type as string;
  let findObject : FindObject = {};
  //透過正則表達式過濾列表
  const matchContent = new RegExp(keyword,'i');
  if(type === 'name' && keyword){
    findObject = { name : matchContent};
  }else if(type === 'category' && keyword){
    findObject = {category: matchContent }
  }
  // 取得mongodb的資料
  const restaurantList = await Restaurant.find(findObject).lean();
  res.render('home',{ restaurantList })
}
// 取得餐廳資料
const getRestaurantInfo = async (req : Request ,res : Response ) => {
  const id : string = req.params.id;
  const result = await Restaurant.findById(id).lean();
  res.render('showpage',{ result })
}

const editRender = async (req : Request ,res : Response ) => {
  const id : string = req.params.id;
  const result = await Restaurant.findById(id).lean();
  res.render('edit',{ result });
}

const editRestaurantInfo = async (req : Request ,res : Response ) =>{
  const id : string = req.params.id;
  const updateContent = req.body;
  const result = await Restaurant.findByIdAndUpdate(id,updateContent);
  res.redirect(`/${id}`)
}

export default { getRestaurants, getRestaurantInfo, editRender, editRestaurantInfo };
import { Request, Response } from "express";
import restaurantFilter from '../utils/restaurantFilter.js';
import { restaurantResult } from "../interface/restaurant.js";

const getRestaurants = (req : Request, res : Response) => {
  const keyword : string = req.query.keyword as string;
  const type : string = req.query.type as string;
  // 帶入關鍵字以及搜尋對象，回傳陣列
  const restaurantList : any[] = new restaurantFilter({type, keyword }).restaurantSearch();
  res.render('home',{ restaurantList })
}
// 取得餐廳資料
const getRestaurantInfo = (req : Request ,res : Response ) => {
  const id : number = parseInt(req.params.id);
  const result : restaurantResult = restaurantFilter.restaurantInfo(id);
  res.render('showpage',{ result })
}

export default { getRestaurants, getRestaurantInfo };
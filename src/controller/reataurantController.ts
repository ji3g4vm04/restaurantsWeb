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

const createRender =  (req : Request ,res : Response ) => {
  res.render('edit',{ title: '新增餐廳', create: true });
}

const createRestaurant = async (req : Request ,res : Response ) => {
  const result = await Restaurant.create(req.body)
  if(result){
    res.status(200).json(result);
  }else{
    res.status(404)
  }
}

const editRender = async (req : Request ,res : Response ) => {
  const id : string = req.params.id;
  const result = await Restaurant.findById(id).lean();
  res.render('edit',{ result, create: false });
}

const editRestaurantInfo = async (req : Request ,res : Response ) =>{
  const id : string = req.params.id;
  const updateContent = req.body;
  await Restaurant.findByIdAndUpdate(id,updateContent);
  res.redirect(`/${id}`)
}

const deleteRestaurant = async (req : Request ,res : Response ) =>{
  const id : any = req.params.id;
  const result = await Restaurant.findOneAndDelete(id);
  if(!result){
    res.status(404)
  }else{
    res.status(204)
    .json({
      status: 'success',
      message: `Deleted ${id}`
    })
  }
}

export default { getRestaurants,
                 getRestaurantInfo,
                 editRender,
                 editRestaurantInfo,
                 deleteRestaurant,
                 createRender,
                 createRestaurant
                };
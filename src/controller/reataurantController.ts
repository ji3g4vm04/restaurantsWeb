import { Request, Response } from "express";
import restaurantFilter from '../utils/restaurantFilter.js';

const getRestaurants = (req : Request, res : Response) => {
  const keyword : string = req.query.keyword as string;
  const type : string = req.query.type as string;
  const restaurantList : any[] = new restaurantFilter({type, keyword }).restaurantSearch();
  res.render('home',{ restaurantList })
}

const getRestaurantInfo = (req : Request ,res : Response ) => {
  const id : number = parseInt(req.params.id);
  const result = new restaurantFilter({id}).restaurantInfo();
  res.render('showpage',{ result })
}

export default { getRestaurants, getRestaurantInfo };
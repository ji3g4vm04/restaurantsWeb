import { Router, Request, Response } from "express";
import restaurantFilter from "../utils/restaurantFilter.js";

const router: Router = Router();

router.route('/').get((req : Request, res : Response) => {
  const keyword : string = req.query.keyword as string;
  const type : string = req.query.type as string;
  const restaurantList : any[] = new restaurantFilter({type, keyword }).restaurantSearch();
  res.render('home',{ restaurantList })
})

router.route('/:id').get((req : Request ,res : Response ) => {
  const id : number = parseInt(req.params.id);
  const result = new restaurantFilter({id}).restaurantInfo();
  console.log(result);

  res.render('showpage',{ result })
})

export default router;
import { Router, Request, Response } from "express";
import restaurantController from '../controller/reataurantController.js';

const router: Router = Router();

router.route('/').get(restaurantController.getRestaurants);

router.route('/:id').get(restaurantController.getRestaurantInfo)

export default router;
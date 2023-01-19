import { Router } from "express";
import restaurantController from '../controller/reataurantController.js';
const router = Router();
router.route('/').get(restaurantController.getRestaurants);
router.route('/:id').get(restaurantController.getRestaurantInfo);
export default router;
//# sourceMappingURL=restaurantRoute.js.map
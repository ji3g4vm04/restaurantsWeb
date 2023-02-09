import { Router } from "express";
import restaurantController from '../controller/reataurantController.js';
const router = Router();
// 首頁
router.route('/').get(restaurantController.getRestaurants);
// /restaurant/:id 由id取得餐廳資料
router.route('/:id').get(restaurantController.getRestaurantInfo);
export default router;
//# sourceMappingURL=restaurantRoute.js.map
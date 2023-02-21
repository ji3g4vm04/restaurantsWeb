import { Router } from "express";
import restaurantController from '../controller/reataurantController.js';
const router = Router();
// 首頁
router.route('/').get(restaurantController.getRestaurants);
// /restaurant/:id 由id取得餐廳資料
router.route('/detail/:id').get(restaurantController.getRestaurantInfo)
    .delete(restaurantController.deleteRestaurant);
router.route('/edit/:id')
    .get(restaurantController.editRender)
    .post(restaurantController.editRestaurantInfo);
router.route('/create')
    .get(restaurantController.createRender)
    .post(restaurantController.createRestaurant);
export default router;
//# sourceMappingURL=restaurantRoute.js.map
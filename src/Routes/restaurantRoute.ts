import { Router } from "express";
import restaurantController from '../controller/reataurantController.js';

const router: Router = Router();

// 首頁
router.route('/').get(restaurantController.getRestaurants);
// /detail/:id 由id取得餐廳資料
router.route('/detail/:id').get(restaurantController.getRestaurantInfo)
                    .delete(restaurantController.deleteRestaurant);
// 編輯資料
router.route('/edit/:id')
      .get(restaurantController.editRender)
      .post(restaurantController.editRestaurantInfo);
//建立新資料
router.route('/create')
      .get(restaurantController.createRender)
      .post(restaurantController.createRestaurant)

export default router;
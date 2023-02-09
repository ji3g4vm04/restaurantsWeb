import { Router } from "express";
import restaurantRoute from './restaurantRoute.js';
const router = Router();
// 所有路徑將由restaurant 開始
router.use('/restaurant', restaurantRoute);
export default router;
//# sourceMappingURL=index.js.map
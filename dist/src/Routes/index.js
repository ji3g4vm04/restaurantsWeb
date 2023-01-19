import { Router } from "express";
import restaurantRoute from './restaurantRoute.js';
const router = Router();
router.use('/restaurant', restaurantRoute);
export default router;
//# sourceMappingURL=index.js.map
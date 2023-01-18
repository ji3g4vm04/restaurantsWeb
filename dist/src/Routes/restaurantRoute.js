import { Router } from "express";
import restaurantFilter from "../utils/restaurantFilter.js";
const router = Router();
router.route('/').get((req, res) => {
    const keyword = req.query.keyword;
    const type = req.query.type;
    const restaurantList = new restaurantFilter({ type, keyword }).restaurantSearch();
    res.render('home', { restaurantList });
});
router.route('/:id').get((req, res) => {
    const id = parseInt(req.params.id);
    const result = new restaurantFilter({ id }).restaurantInfo();
    console.log(result);
    res.render('showpage', { result });
});
export default router;
//# sourceMappingURL=restaurantRoute.js.map
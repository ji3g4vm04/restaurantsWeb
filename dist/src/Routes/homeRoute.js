import express from 'express';
import restaurantFilter from '../utils/restaurantFilter.js';
const router = express.Router();
router.route('/').get((req, res) => {
    const keyword = req.query.keyword;
    const restaurantList = new restaurantFilter({ type: 'name', keyword }).restaurantSearch();
    res.render('home', { restaurantList });
});
export default router;
//# sourceMappingURL=homeRoute.js.map
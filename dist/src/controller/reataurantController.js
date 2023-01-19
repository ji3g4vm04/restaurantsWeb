import restaurantFilter from '../utils/restaurantFilter.js';
const getRestaurants = (req, res) => {
    const keyword = req.query.keyword;
    const type = req.query.type;
    const restaurantList = new restaurantFilter({ type, keyword }).restaurantSearch();
    res.render('home', { restaurantList });
};
const getRestaurantInfo = (req, res) => {
    const id = parseInt(req.params.id);
    const result = new restaurantFilter({ id }).restaurantInfo();
    res.render('showpage', { result });
};
export default { getRestaurants, getRestaurantInfo };
//# sourceMappingURL=reataurantController.js.map
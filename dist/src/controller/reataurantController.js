import restaurantFilter from '../utils/restaurantFilter.js';
const getRestaurants = (req, res) => {
    const keyword = req.query.keyword;
    const type = req.query.type;
    // 帶入關鍵字以及搜尋對象，回傳陣列
    const restaurantList = new restaurantFilter({ type, keyword }).restaurantSearch();
    res.render('home', { restaurantList });
};
// 取得餐廳資料
const getRestaurantInfo = (req, res) => {
    const id = parseInt(req.params.id);
    const result = restaurantFilter.restaurantInfo(id);
    res.render('showpage', { result });
};
export default { getRestaurants, getRestaurantInfo };
//# sourceMappingURL=reataurantController.js.map
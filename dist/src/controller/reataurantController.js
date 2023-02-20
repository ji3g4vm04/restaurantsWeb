import restaurantFilter from '../utils/restaurantFilter.js';
import Restaurant from "../models/restaurantModel.js";
const getRestaurants = async (req, res) => {
    const keyword = req.query.keyword;
    const type = req.query.type;
    let findObject = {};
    //透過正則表達式過濾列表
    const matchContent = new RegExp(keyword, 'i');
    if (type === 'name' && keyword) {
        findObject = { name: matchContent };
    }
    else if (type === 'category' && keyword) {
        findObject = { category: matchContent };
    }
    // 取得mongodb的資料
    const restaurantList = await Restaurant.find(findObject).lean();
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
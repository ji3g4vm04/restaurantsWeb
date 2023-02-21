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
const getRestaurantInfo = async (req, res) => {
    const id = req.params.id;
    const result = await Restaurant.findById(id).lean();
    res.render('showpage', { result });
};
const createRender = (req, res) => {
    res.render('edit', { title: '新增餐廳', create: true });
};
const createRestaurant = async (req, res) => {
    const result = await Restaurant.create(req.body);
    if (result) {
        res.status(200).json(result);
    }
    else {
        res.status(404);
    }
};
const editRender = async (req, res) => {
    const id = req.params.id;
    const result = await Restaurant.findById(id).lean();
    res.render('edit', { result, create: false });
};
const editRestaurantInfo = async (req, res) => {
    const id = req.params.id;
    const updateContent = req.body;
    await Restaurant.findByIdAndUpdate(id, updateContent);
    res.redirect(`/${id}`);
};
const deleteRestaurant = async (req, res) => {
    const id = req.params.id;
    const result = await Restaurant.findOneAndDelete(id);
    if (!result) {
        res.status(404);
    }
    else {
        res.status(204)
            .json({
            status: 'success',
            message: `Deleted ${id}`
        });
    }
};
export default { getRestaurants,
    getRestaurantInfo,
    editRender,
    editRestaurantInfo,
    deleteRestaurant,
    createRender,
    createRestaurant
};
//# sourceMappingURL=reataurantController.js.map
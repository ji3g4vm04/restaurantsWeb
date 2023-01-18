import { Router } from "express";
import restaurants from '../../restaurant.json' assert { type: 'json' };
const router = Router();
router.route('/:id').get((req, res) => {
    // interface Id {
    //   id : number;
    // }
    const id = parseInt(req.params.id);
    const result = restaurants.results.filter((item) => {
        return item.id === id;
    })[0];
    console.log(result);
    // const { id } : Id = req.params;
    res.render('showpage', { result });
});
export default router;
//# sourceMappingURL=foodRoute.js.map
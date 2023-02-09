import express, { Router } from "express";
import restaurantRoute from './restaurantRoute.js';

const router : Router = Router();
// 所有路徑將由restaurant 開始
router.use('/',restaurantRoute);

export default router;
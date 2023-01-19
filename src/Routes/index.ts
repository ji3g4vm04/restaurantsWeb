import express, { Router } from "express";
import restaurantRoute from './restaurantRoute.js';

const router : Router = Router();

router.use('/restaurant',restaurantRoute);

export default router;
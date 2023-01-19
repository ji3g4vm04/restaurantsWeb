import express from "express";
import { engine } from 'express-handlebars';
import path from 'path';
// const express = require('express');
// const handlebars = require('express-handlebars');
import restaurantRouter from './Routes/restaurantRoute.js';
const __dirname = path.resolve();
const app = express();
const port = 3000;
// app.set('view engine','handlebars');
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
// app.engine('handlebars',handlebars({ defaultLsyout: 'main' }));
// 定義更明確的路徑 以利切換網址後錯誤
app.use('/public', express.static('public'));
app.use('/restaurant', restaurantRouter);
app.listen(port, () => {
    console.log(`app is rinning on localhost:${port}`);
});
//# sourceMappingURL=app.js.map
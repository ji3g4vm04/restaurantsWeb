import express from "express";
import { engine } from 'express-handlebars';
import path from 'path';
import routes from './Routes/index.js';
// const express = require('express');
// const handlebars = require('express-handlebars');
const __dirname = path.resolve();
const app = express();
const port = 3000;
// app.set('view engine','handlebars');
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
// app.engine('handlebars',handlebars({ defaultLsyout: 'main' }));
// 定義更明確的路徑 以利切換網址後錯誤
app.use('/public', express.static('public'));
app.use(routes);
app.listen(port, () => {
    console.log(`app is rinning on localhost:${port}`);
});
//# sourceMappingURL=app.js.map
import express ,{ Application, Request, Response } from "express";
import { engine } from 'express-handlebars';
import routes from './Routes/index.js';
import bodyParser from 'body-parser';
// const express = require('express');
// const handlebars = require('express-handlebars');

const app : Application = express();

const port : number = 3000; 

// app.set('view engine','handlebars');
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
// app.engine('handlebars',handlebars({ defaultLsyout: 'main' }));
// 定義更明確的路徑 以利切換網址後錯誤
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/public',express.static('public'));

app.use(routes);

export default app;


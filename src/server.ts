import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import app from './app.js';

dotenv.config()

const port : number = parseInt(process.env.PORT) || 3000 ; 
const password = process.env.DATABASE_PASSWORD;
const DB = process.env.DATABASE.replace('<password>',password);
// 連接mongoDB
mongoose.connect(DB)
        .then(() => {
          console.log('connect success!')
        })
        .catch((error) => {
          console.error(error)
        })

app.listen(port,() => {
  console.log('Application is running on port 3000')
})
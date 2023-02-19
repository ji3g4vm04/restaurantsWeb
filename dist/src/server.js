import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import app from './app.js';
dotenv.config();
const port = parseInt(process.env.PORT) || 3000;
const password = process.env.DATABASE_PASSWORD;
const DB = process.env.DATABASE.replace('<password>', password);
mongoose.connect(DB)
    .then(() => {
    console.log('connect success!');
})
    .catch((error) => {
    console.error(error);
});
app.listen(port, () => {
    console.log('Application is running on port 3000');
});
//# sourceMappingURL=server.js.map
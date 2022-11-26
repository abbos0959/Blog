const dotenv = require("dotenv");
dotenv.config();
const app = require("./middleware/app");
const colors = require("colors");
const DB = require("./connect/DB");
DB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server ishladi ${process.env.PORT}`.bgGreen.bold));

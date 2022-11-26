const mongoose = require("mongoose");

const DB = async () => {
   try {
      await mongoose.connect(process.env.URL);
      console.log("MONGO ULANDI".bgBlue.bold);
   } catch (error) {
      console.log("mongoDB ulanmadi".bgRed.bold);
   }
};

module.exports = DB;

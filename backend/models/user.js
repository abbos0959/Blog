const mongoose = require("mongoose");
const validator = require("validator");
const UserModel = new mongoose.Schema(
   {
      name: { type: String, trim: true },

      email: {
         type: String,
         validate: [validator.isEmail, "Siz email kiriting"],
         trim: true,
      },
      password: { type: String, required: true },
      post: {
         type: mongoose.Types.ObjectId,
         ref: "posts",
      },
   },
   {
      timestamps: true,
   }
);

module.exports = mongoose.model("users", UserModel);

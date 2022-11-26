const UserModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwtToken = require("../utils/jwtToken");
const register = async (req, res) => {
   try {
      const { name, email, password } = req.body;

      const user = await UserModel.findOne({ email });
      if (user) {
         return res.status(402).json({
            success: false,
            message: "bunday user allaqachon mavjud",
         });
      }
      const hashpassword = await bcrypt.hash(password, 12);
      const newUser = await UserModel.create({
         name,
         password: hashpassword,
         email,
      });

      jwtToken(newUser, 200, res);
   } catch (error) {
      return res.status(500).json({
         success: false,
         message: error.message,
      });
   }
};

const login = async (req, res) => {
   try {
      const { email, password } = req.body;

      const user = await UserModel.findOne({ email });
      if (!user) {
         return res.status(402).json({
            success: false,
            message: "bunday user mavjud emas",
         });
      }

      const comparePassword = await bcrypt.compare(password, user.password);
      if (!comparePassword) {
         return res.status(402).json({
            success: false,
            message: "parolda xatolik mavjud iltimos tekshirib qaytadan tering",
         });
      }
      jwtToken(user, 200, res);
   } catch (error) {
      res.status(500).json({
         success: false,
         message: error.message,
      });
   }
};

module.exports = { register, login };

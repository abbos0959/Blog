import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import { checkIsAuth } from "../features/auth/authSlice";

export const LoginPage = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const dispatch = useDispatch();
   const { status } = useSelector((state) => state.auth);
   const isA = useSelector(checkIsAuth);
   const navigate = useNavigate();

   
   const handleSubmit = async () => {
      dispatch(LoginUser({ email, password }));
   };

   useEffect(() => {
      if (status) {
         toast(status);
      }
      if (isA) {
         navigate("/");
      }
   }, [status, isA, navigate]);
   return (
      <form
         onSubmit={(e) => e.preventDefault()}
         className="w-1/4 h-60 mx-auto mt-40"
         style={{
            boxShadow:
               " rgba(255, 255, 255, 0.95) 2px 2px 10px 10px, rgba(0, 0, 0, 0.9) 0px 1px 3px -1px",
            padding: "20px",
         }}
      >
         <h1 className="text-lg text-white text-center">Ro'yhatdan o'tish</h1>
         <label className="text-xs text-gray-400">
            Email
            <input
               type="text"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               placeholder="Username"
               className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
            />
         </label>

         <label className="text-xs text-gray-400">
            Parol
            <input
               type="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               placeholder="Password"
               className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
            />
         </label>

         <div className="flex gap-8 justify-center mt-4">
            <button
               style={{ backgroundColor: "green", borderRadius: "10px", width: "40%" }}
               type="submit"
               onClick={handleSubmit}
               className="flex justify-center items-center text-xs bg-gray-600 text-white rounded-sm py-2 px-4"
            >
               Kirish
            </button>
            <Link to="/register" className="flex justify-center items-center text-xs text-white">
               Sizda akkaunt yo'qmi ?
            </Link>
         </div>
      </form>
   );
};

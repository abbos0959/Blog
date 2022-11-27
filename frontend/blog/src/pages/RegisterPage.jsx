import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/auth/authSlice";
import { toast } from "react-toastify";
export const RegisterPage = () => {
   const navigate = useNavigate();
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [name, setName] = useState("");
   const dispatch = useDispatch();
   const { status } = useSelector((state) => state.auth);
   console.log(status);

   useEffect(() => {
      if (status) {
         toast(status);
      }
      
   }, [status]);

   const handleSubmit = async () => {
      try {
         // if(name=="" || password=="" || email==""){
         //   alert("input ma'lumot kirit oshna")
         // }
         console.log(email, password, name);
         dispatch(registerUser({ name, email, password }));
         toast(status);
         
         setEmail("");
         setPassword("");
         setName("");
      } catch (error) {
         console.log(error);
      }
   };
   return (
      <form
         onSubmit={(e) => e.preventDefault()}
         className="w-1/4 h-70 mx-auto mt-40"
         style={{
            boxShadow:
               " rgba(255, 255, 255, 0.95) 2px 2px 10px 10px, rgba(0, 0, 0, 0.9) 0px 1px 3px -1px",
            padding: "20px",
         }}
      >
         <h1 className="text-lg text-white text-center">Ro'yhatdan o'tish</h1>

         <label className="text-xs text-gray-400">
            Name
            <input
               type="text"
               value={name}
               onChange={(e) => setName(e.target.value)}
               placeholder="Name"
               className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
            />
         </label>
         <label className="text-xs text-gray-400">
            Email
            <input
               type="text"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               placeholder="email kiriting"
               className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
            />
         </label>

         <label className="text-xs text-gray-400">
            Parol
            <input
               type="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               placeholder="parol kiriting"
               className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
            />
         </label>

         <div className="flex gap-8 justify-center mt-4">
            <button
               style={{
                  width: "50%",
                  borderRadius: "10px",
                  fontSize: "12px",
                  marginLeft: "-70px",
                  backgroundColor: "green",
               }}
               type="submit"
               onClick={handleSubmit}
               className="flex justify-center items-center text-xs bg-gray-600 text-white rounded-sm py-2 px-4"
            >
               Ro'yhatdan O'tish
            </button>
            <Link
               to="/login"
               style={{}}
               className="flex justify-center items-center text-xs text-white"
            >
               Kirish
            </Link>
         </div>
      </form>
   );
};

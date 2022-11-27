import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

const initialState = {
   user: null,
   token: null,
   isLoading: false,
   status: null,
};

export const registerUser = createAsyncThunk("auth", async ({ name, email, password }) => {
   try {
      const { data } = await axios.post("/register", {
         name,
         email,
         password,
      });
      if (data.token) {
         window.localStorage.setItem("token", data.token);
      }
      // alert("tizimga kirdiz");

      return data;
   } catch (error) {
      // alert(error.message);
      // console.log(error.response.data.message);
   }
});

export const LoginUser = createAsyncThunk("auth", async ({ email, password }) => {
   try {
      const { data } = await axios.post("/login", {
         email,
         password,
      });
      if (data.token) {
         window.localStorage.setItem("token", data.token);
      }
      // alert("tizimga kirdiz");

      return data;
   } catch (error) {
      // alert(error.message);
      console.log(error);
   }
});

export const getMe = createAsyncThunk("auth", async () => {
   try {
      const { data } = await axios.get("/me");
      console.log(data);
      return data;
   } catch (error) {
      // alert(error.message);
      console.log(error);
   }
});

export const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      logout: (state) => {
         state.user = null;
         state.token = null;
         state.isLoading = false;
         state.status = null;
      },
   },
   extraReducers: {
      // register ///////////////////////////////
      [registerUser.pending]: (state) => {
         state.isLoading = true;
         state.status = null;
      },
      [registerUser.fulfilled]: (state, action) => {
         state.isLoading = false;
         state.user = action.payload.user;
         state.status = action.payload.message;
         state.token = action.payload.token;
      },
      [registerUser.rejected]: (state, action) => {
         //  console.log("actionnnnnnnnnnnnnnnn", action.payload);
         state.status = action.payload.message;
         state.isLoading = false;
      },

      //             login /////////////////////////////////////////////////
      [LoginUser.pending]: (state) => {
         state.isLoading = true;
         state.status = null;
      },
      [LoginUser.fulfilled]: (state, action) => {
         state.isLoading = false;
         state.user = action.payload.user;
         state.status = action.payload.message;
         state.token = action.payload.token;
      },
      [LoginUser.rejected]: (state, action) => {
         //  console.log("actionnnnnnnnnnnnnnnn", action.payload);
         state.status = action.payload.message;
         state.isLoading = false;
      },

      ////                 getme ////////////////////////////////

      [getMe.pending]: (state) => {
         state.isLoading = true;
         state.status = null;
      },
      [getMe.fulfilled]: (state, action) => {
         state.isLoading = false;
         state.user = action.payload?.user;
         state.status = null;
         state.token = action.payload?.token;
      },
      [getMe.rejected]: (state, action) => {
         state.status = action.payload.message;
         state.isLoading = false;
      },
   },
});

export const checkIsAuth = (state) => Boolean(state.auth.token);
export const { logout } = authSlice.actions;
export default authSlice.reducer;

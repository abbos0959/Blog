import "./App.css";
import { Layout } from "./components/Layout";
import { MainPage } from "./pages/MainPage";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { PostsPage } from "./pages/PostsPage";
import { PostPage } from "./pages/PostPage";
import { AddPostPage } from "./pages/AddPostPage";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { EditPostPage } from "./pages/EditPostPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { getMe } from "./features/auth/authSlice";
function App() {
  //  const dispatch = useDispatch();

  //  useEffect(() => {
  //     dispatch(getMe());
  //  }, []);

   return (
      <Layout>
         <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="posts" element={<PostsPage />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/post/:id/edit" element={<EditPostPage />} />

            <Route path="/new" element={<AddPostPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
         </Routes>
         <ToastContainer position="bottom-right" />
      </Layout>
   );
}

export default App;

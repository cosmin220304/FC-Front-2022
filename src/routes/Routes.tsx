import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import {
  PostDetails,
  PostsList,
  Welcome,
  Login,
  Register,
  AdminDashboard,
} from "../components/pages";
import { UserContext } from "../hooks/UserContext";

function AppRoutes() {
  const { userState } = useContext(UserContext);
  const { user } = userState;

  // private routes
  if (!user) {
    return (
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<PostsList />} />
      <Route path="/posts" element={<PostsList />} />
      <Route path="/posts/:postId" element={<PostDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
}

export default AppRoutes;

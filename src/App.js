import React from "react";
import { Route, Routes } from "react-router-dom";

import AddNewHikePage from "./pages/AddNewHikePage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import MyHikesPage from "./pages/MyHikesPage";
import HikePage from "./pages/HikePage";

import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/add-new-hike" element={<AddNewHikePage />} />
        <Route path="/my-hikes" element={<MyHikesPage />} />
        <Route path="/hike" element={<HikePage />} />
      </Routes>
    </Layout>
  );
}

export default App;

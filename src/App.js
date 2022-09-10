import React from "react";
import { Route, Routes } from "react-router-dom";

import AddNewHikePage from "./pages/AddNewHikePage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add-new-hike" element={<AddNewHikePage />} />
    </Routes>
  );
}

export default App;

import React from "react";
import Chart from "chart.js/auto";
//import EmployeeDashboard from "./pages/EmployeeDashboard";
import Login from "./pages/Login";
import { Router, Routes, Route } from "react-router-dom";
import Container from "./layout/Container";
import AdminDashboard from "./components/admin/AdminDashboard";
import { ToasterContainer } from "./components/Toaster";
import SingleEmployee from "./pages/SingleEmployee";

const App = () => {
  return (
    <div>
      <ToasterContainer />
      <SingleEmployee />
      {/* <AdminDashboard /> */}
      {/* <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<Container />} />
      </Routes> */}
    </div>
  );
};

export default App;

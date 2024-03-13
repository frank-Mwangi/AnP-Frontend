import React from "react";
import EmployeeDashboard from "../pages/EmployeeDashboard";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "../components/admin/AdminDashboard";

const Container = () => {
  return (
    <div className="layout">
      <Routes>
        <Route path="/dashboard" element={<EmployeeDashboard />} />
        <Route path="/admindash" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
};

export default Container;

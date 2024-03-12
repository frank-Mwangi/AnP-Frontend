import React from "react";
import EmployeeDashboard from "../pages/EmployeeDashboard";
import { Routes, Route } from "react-router-dom";

const Container = () => {
  return (
    <div className="layout">
      <Routes>
        <Route path="/dashboard" element={<EmployeeDashboard />} />
      </Routes>
    </div>
  );
};

export default Container;

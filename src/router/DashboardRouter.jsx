// DashboardRouter.js
import React from "react";
import { SideBar } from "../dashboard/components";
import { Route, Routes, Navigate } from "react-router-dom";
import { MessagePage, ProjectsPage } from "../dashboard/pages";

export const DashboardRouter = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex h-100">
        <Routes>
          {/* Redirect to the MessagePage when accessing the dashboard */}
          <Route
            path="/"
            element={<Navigate to="/dashboard/messages" />}
          />
          <Route path="/messages" element={<MessagePage />} />
          <Route path="/projects" element={<ProjectsPage />} />

          {/* Other routes of the dashboard */}
        </Routes>
      </div>
    </div>
  );
};

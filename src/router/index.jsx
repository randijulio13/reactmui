import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../views/Dashboard";
import * as Middleware from "../middleware";
import NavBar from "../components/NavBar";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";
import Forgot from "../views/auth/Forgot";

function index(props) {
  return (
    <div>
      <Routes>
        <Route element={<Middleware.Auth />}>
          <Route element={<NavBar />}>
            <Route path="/" element={<Dashboard />} />
          </Route>
        </Route>
        <Route element={<Middleware.Guest />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </div>
  );
}

export default index;

import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import Login from "./pages/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Drawer from "./components/Drawer";
import { AuthProvider } from "./contexts/AuthContext";
import AuthGuard from './guards/AuthGuard'
function App(props) {
  return (
    <AuthProvider>
      <Routes>
          <Route path="/dashboard" element={<Drawer />} />
          <Route path="/categories" element={<v {...props} />} />
          <Route path="/products" element={<Drawer />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </AuthProvider>
  );
}

export default App;

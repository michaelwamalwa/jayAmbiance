import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProductList from "./components/ProductList";
import Login from "./pages/User/Login";
import ProtectedRoute from "./pages/User/ProtectedRoute.js";
import Dashboard from "./pages/User/dashboard.js";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import NavBar from "./components/Navbar.js";
import  Signup from "./pages/User/Signup";
import Home from "./pages/Home/Home.js";
import About from "./pages/About/About.js";

import Settings from "./pages/Settings/Settings.js";
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route exact path="/" element={<NavBar />} />
    <Route exact path="/login" element={<Login />} />
    <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Other protected routes */}
      </Route>
    <Route exact path="/add" element={<AddProduct />} />
    <Route exact path="/signup" element={<Signup />} />
    <Route exact path="/edit/:id" element={<EditProduct />} />
    <Route exact path="/products" element={<ProductList />} />
    <Route exact path="/home" element={<Home />} />
    <Route exact path="/about" element={<About />} />
    <Route exact path="/settings" element={<Settings />} />
   </Routes>
   </BrowserRouter> </>
  );
}

export default App;

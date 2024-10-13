import React from "react";
import Info from "./Components/Info";
import Home from "./Components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Feedback from "./Components/Feedback";
import Login from "./Components/Login";
import Userlogin from "./Components/Userlogin";
import Contractorlogin from "./Components/Contractorlogin";
import Supplierlogin from "./Components/Supplierlogin";
import Manufacturerlogin from "./Components/Manufacturerlogin";
import UserSignup from "./Components/UserSignup";
import ContractorSignup from "./Components/ContractorSignup";
import SupplierSignup from "./Components/SupplierSignup";
import ManufacturerSignup from "./Components/ManufacturerSignup";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Info />
        </>
      ),
    },
    {
      path: "/Home",
      element: (
        <>
          <Navbar />
          <Home />
          <Feedback />
        </>
      ),
    },
    {
      path: "/Login",
      element: (
        <>
          <Navbar />
          <Login />
        </>
      ),
    },
    {
      path: "/Userlogin",
      element: (
        <>
          <Navbar />
          <Userlogin />
        </>
      ),
    },
    {
      path: "/Contractorlogin",
      element: (
        <>
          <Navbar />
          <Contractorlogin />
        </>
      ),
    },
    {
      path: "/Supplierlogin",
      element: (
        <>
          <Navbar />
          <Supplierlogin />
        </>
      ),
    },
    {
      path: "/Manufacturerlogin",
      element: (
        <>
          <Navbar />
          <Manufacturerlogin />
        </>
      ),
    },
    {
      path: "/UserSignup",
      element: (
        <>
          <Navbar />
          <UserSignup/>
        </>
      ),
    },
    {
      path: "/ContractorSignup",
      element: (
        <>
          <Navbar />
          <ContractorSignup/>
        </>
      ),
    },
    {
      path: "/SupplierSignup",
      element: (
        <>
          <Navbar />
          <SupplierSignup/>
        </>
      ),
    },
    {
      path: "/ManufacturerSignup",
      element: (
        <>
          <Navbar />
          <ManufacturerSignup/>
        </>
      ),
    },
  ]);

  return (
    <div>
      {/* <Navbar /> */}
      {/* <Info />
      <Home /> */}
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

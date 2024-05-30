import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/user/login/login.tsx";
import Personal from "./pages/Personal.tsx";
import Recruiment from "./pages/Recruitment";
import PersonalInf from "./pages/PersonalInformation.tsx";
import Inventory from "./pages/Inventory.tsx"
import InventoryReturn from "./pages/InventoryReturn.tsx"
import Donation from "./pages/DonationList.tsx"
import ReturnsList from './components/returnslist/returnslist.tsx';
const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/personal", element: <Personal /> },
  { path: "/recruiment", element: <Recruiment /> },
  { path: "/personalInf", element: <PersonalInf /> },
  { path: "/inventory", element: <Inventory/> },
  { path: "/inventoryReturn", element: <InventoryReturn/> },
  { path: "/donation", element: <Donation/> },
  { path:  "/sar/devoluciones",  element: <ReturnsList /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import Login from "./components/user/login/login.tsx";
import MainMenu from "./components/main-menu/main-menu.tsx";


import TableMain from "./components/maintenance/ControlInspections/App.tsx";
import Inspection from "./components/maintenance/ControlInspections/Control/Inspection.jsx";
import Inspection2 from "./components/maintenance/ControlInspections/Control/Inspection2.jsx";

//import TableMain from "./components/maintenance/ControlComponents/App.tsx";
// import Inspection from "./components/maintenance/ControlComponents/Control/Inspection.jsx";
//import Inspection2 from "./components/maintenance/ControlComponents/Control/Inspection2.jsx";


const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/menu-principal", element: <MainMenu /> },
  { path: "/App", element: <TableMain /> },
  { path: "/Inspection", element: <Inspection/> },
  { path: "/Inspection2", element: <Inspection2 />}
]);


ReactDOM.createRoot(document.getElementById("root")!).render(
  <NextUIProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </NextUIProvider>
);


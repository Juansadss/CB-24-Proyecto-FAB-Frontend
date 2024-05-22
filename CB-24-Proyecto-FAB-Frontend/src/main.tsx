import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/user/login/login.tsx';
import MainMenu from './components/main-menu/main-menu.tsx';
import Personal from "./pages/Personal.tsx";
import Recruiment from "./pages/Recruitment.tsx";
import PersonalInf from "./pages/PersonalInformation.tsx";

import GuardManagement from './components/sar/guard-management/guard-management.tsx';

const router = createBrowserRouter([
  { path:  "/",  element: <Login /> },
  { path:  "/menu-principal",  element: <MainMenu /> },
  { path:  "/sar/gestion-guardias",  element: <GuardManagement /> },
  { path: "/personal", element: <Personal /> },
  { path: "/recruiment", element: <Recruiment /> },
  { path: "/personalInf", element: <PersonalInf /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
)


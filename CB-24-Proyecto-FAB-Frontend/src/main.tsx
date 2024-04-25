import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/user/login/login.tsx';
import MainMenu from './components/main-menu/main-menu.tsx';
import PilotManagement from './components/operations/pilot-management/pilot-management.tsx';
import OperationsMenu from './components/operations/operations-menu/operations-menu.tsx';

const router = createBrowserRouter([
  { path:  "/",  element: <Login /> },
  { path:  "/menu-principal",  element: <MainMenu /> },
  { path:  "/menu-principal/menu-operaciones/gestion-pilotos",  element: <PilotManagement /> },
  { path:  "/menu-principal/menu-operaciones",  element: <OperationsMenu /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
)


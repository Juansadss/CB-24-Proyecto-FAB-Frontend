import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/user/login/login.tsx';
import MainMenu from './components/main-menu/main-menu.tsx';
import GuardManagement from './components/sar/guard-management/guard-management.tsx';
import RecruitmentInformation from './components/sar/recruitment_Information/recruitment_Information.tsx';
import OperationsList from './components/sar/operations_list/operations_list.tsx';
import OperationsCreate from './components/sar/create_operating/create_operations.tsx';
import SanidadTratamiento from './components/sar/sanidad_tratamiento/sanidad_tratamiento.tsx';

const router = createBrowserRouter([
  { path:  "/",  element: <Login /> },
  { path:  "/menu-principal",  element: <MainMenu /> },
  { path:  "/sar/gestion-guardias",  element: <GuardManagement /> },
  { path:  "/sar/informacion-reclutamiento",  element: <RecruitmentInformation/> },
  { path:  "/sar/operaciones-lista",  element: <OperationsList/> },
  { path:  "/sar/crear-operaciones",  element: <OperationsCreate/> },
  { path:  "/sar/sanidad-tratamiento",  element: <SanidadTratamiento/> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
)


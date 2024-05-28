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
import InventoryDelivery from './components/sar/inventory_delivery/inventory_delivery.tsx';
import InventoryReturn from './components/sar/inventory_return/inventory_return.tsx';
import PersonalAttendanceReport from './components/sar/personal_attendance_report/personal_attendance_report.tsx';
import PersonalOperationsReport from './components/sar/personal_operations_report/personal_operations_report.tsx';




const router = createBrowserRouter([
  { path:  "/",  element: <Login /> },
  { path:  "/menu-principal",  element: <MainMenu /> },
  { path:  "/sar/gestion-guardias",  element: <GuardManagement /> },
  { path:  "/sar/inventario-entrega",  element: <InventoryDelivery/> },
  { path:  "/sar/inventario-devolucion",  element: <InventoryReturn/> },
  { path:  "/sar/operaciones-lista",  element: <OperationsList/> },
  { path:  "/sar/informacion-reclutamiento",  element: <RecruitmentInformation/> },
  { path:  "/sar/crear-operaciones",  element: <OperationsCreate/> },
  { path:  "/sar/sanidad-tratamiento",  element: <SanidadTratamiento/> },
  { path:  "/sar/Personal-reporte-asistencia",  element: <PersonalAttendanceReport/> },
  { path:  "/sar/Personal-reporte-operaciones",  element: <PersonalOperationsReport/> },

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
)


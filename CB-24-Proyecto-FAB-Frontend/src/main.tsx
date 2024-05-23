import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/user/login/login.tsx';
import MainMenu from './components/main-menu/main-menu.tsx';
import MaintenanceMenu from './components/maintenance/maintenance-menu/maintenance-menu.tsx';
import MaintenanceOrdersList from './components/maintenance/maintenance-ordersList/maintenance-ordersList.tsx';
import MaintenanceComponentControl from './components/maintenance/maintenance-componentControl/maintenance-componentControl.tsx';
import MaintenanceWarehouseInventory from './components/maintenance/maintenance-warehouseInventory/maintenance-warehouseInventory.tsx';
import MaintenanceNewWorkOrder from './components/maintenance/maintenance-new-work-order/maintenance-new-work-order.tsx';
import MaintenanceManuals from './components/maintenance/maintenance-manuals/maintenance-manuals.tsx';
import MaintenanceAlerts from './components/maintenance/maintenance-alerts/maintenance-alerts.tsx';
import MaintenanceAlertsHistory from './components/maintenance/maintenance-alerts-history/maintenance-alerts-history.tsx';

const router = createBrowserRouter([
  { path:  "/",  element: <Login /> },
  { path:  "/menu-principal",  element: <MainMenu /> },
  { path:  "/menu-principal/mantenimiento",  element: <MaintenanceMenu /> },
  { path:  "/menu-principal/mantenimiento/ordenes-trabajo",  element: <MaintenanceOrdersList /> },
  { path:  "/menu-principal/mantenimiento/control-componentes",  element: <MaintenanceComponentControl /> },
  { path:  "/menu-principal/mantenimiento/inventario-almacenes",  element: <MaintenanceWarehouseInventory /> },
  { path:  "/menu-principal/mantenimiento/ordenes-trabajo/programar-orden-trabajo",  element: <MaintenanceNewWorkOrder /> },
  { path:  "/menu-principal/mantenimiento/manuales",  element: <MaintenanceManuals /> },
  { path: "/menu-principal/mantenimiento/alertas", element: <MaintenanceAlerts /> },
  { path: "/menu-principal/mantenimiento/alertas/historial-alertas", element: <MaintenanceAlertsHistory /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
)


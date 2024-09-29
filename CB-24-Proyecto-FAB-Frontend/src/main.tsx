import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/user/login/login.tsx';
import Prueba from './components/user/login/prueba.tsx';
import IndexAlmacenesExport from './components/Almacenes/Inventory/IndexAlmacenes.tsx';
import InventoryComponentExport from './components/Almacenes/Inventory/InventoryComponent.tsx';
import InventoryComponentDetailExport from './components/Almacenes/Inventory/InventoryComponentDetail.tsx';
import IndexAlmacenesLubricantesExport from './components/Almacenes/Inventory/IndexAlmacenesLubricantes.tsx';
import InventoryComponentOhterExport from './components/Almacenes/Inventory/InventoryComponentOther.tsx';
import OrderFormExport from './components/Almacenes/purchase_order_register/components/OrderForm.tsx';
import PendientesRecepcionExport from './components/Almacenes/Recepción/PendientesRecepción.tsx';
import PendientesRecepcionOtrosExport from './components/Almacenes/Recepción/PendientesRecepcionOtros.tsx';

const router = createBrowserRouter([
  { path:  "/",  element: <Login /> },
  { path: "/prueba", element: <Prueba /> },
  { path: "/almacenes", element: <IndexAlmacenesExport /> },

  { path: "/almacenes/inventory/component", element: <InventoryComponentExport /> },
  { path: "/almacenes/inventory/componentOther", element: <InventoryComponentOhterExport /> },

  { path: "/almacenes/inventory/component/detail", element: <InventoryComponentDetailExport /> },
  { path: "/almacenes/other", element: <IndexAlmacenesLubricantesExport /> },
  { path: "/almacenes/OrdenCompra", element: <OrderFormExport /> },
  { path: "/almacenes/recepcion/pendientes", element: <PendientesRecepcionExport /> },
  { path: "/almacenes/recepcion/pendientesOtros", element: <PendientesRecepcionOtrosExport /> }


]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
)


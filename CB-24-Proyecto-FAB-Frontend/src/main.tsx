import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/user/login/login.tsx';
import Prueba from './components/user/login/prueba.tsx';
import IndexAlmacenesExport from './components/Almacenes/IndexAlmacenes.tsx';
import Tipo_DetalleExport from './components/Almacenes/Control_Inventario/Tipo_Detalle.tsx';

const router = createBrowserRouter([
  { path:  "/",  element: <Login /> },
  { path: "/prueba", element: <Prueba /> },
  { path: "/orden", element: <IndexAlmacenesExport /> },
  { path: "/almacenes", element: <Tipo_DetalleExport /> }//ojo

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
)


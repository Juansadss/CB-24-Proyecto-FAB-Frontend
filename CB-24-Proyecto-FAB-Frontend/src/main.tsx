import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/user/login/login.tsx';
import Prueba from './components/user/login/prueba.tsx';
import IndexAlmacenesExport from './components/Almacenes/IndexAlmacenes.tsx';
import Tipo_DetalleExport from './components/Almacenes/Control_Inventario/Tipo_Detalle.tsx';
import Orden_De_SalidaExport from './components/Almacenes/Orden_De_Salida/orden_de_salida.tsx';
import Registro from './components/Almacenes/Orden_De_Salida/Registro_salida.tsx';//ojo no subir al git

const router = createBrowserRouter([
  { path:  "/",  element: <Login /> },
  { path: "/prueba", element: <Prueba /> },
  { path: "/orden", element: <IndexAlmacenesExport /> },
  { path: "/almacenes", element: <Tipo_DetalleExport /> },
  { path: "/orden_de_salida", element: <Orden_De_SalidaExport /> },//ojo
  { path: "/Registro_salida", element: <Registro/>}

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
)


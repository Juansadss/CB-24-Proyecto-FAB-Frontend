import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/user/login/login.tsx';
import Prueba from './components/user/login/prueba.tsx';
import IndexAlmacenesExport from './components/Almacenes/IndexAlmacenes.tsx';
const router = createBrowserRouter([
  { path:  "/",  element: <Login /> },
  { path: "/prueba", element: <Prueba /> },
  { path: "/almacenes", element: <IndexAlmacenesExport /> }

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
)


import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/user/login/login.tsx';
import MainMenu from './components/main-menu/main-menu.tsx';
import GuardManagement from './components/sar/guard-management/guard-management.tsx';
import PersonalForm from './components/sar/personal/personal.tsx';
import RecruitmentForm from './components/sar/recruitment/recruitment.tsx';
import SanitationForm from './components/sar/sanitation/sanitation.tsx';
import ReportGuards from './components/sar/reportguards/reportguards.tsx';

const router = createBrowserRouter([
  { path:  "/",  element: <Login /> },
  { path:  "/menu-principal",  element: <MainMenu /> },
  { path:  "/sar/gestion-guardias",  element: <GuardManagement /> },
  { path:  "/sar/personal",  element: <PersonalForm /> },
  { path:  "/sar/reclutamiento",  element: <RecruitmentForm /> },
  { path:  "/sar/sanidad",  element: <SanitationForm /> },
  { path:  "/sar/guardias",  element: <ReportGuards /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
)


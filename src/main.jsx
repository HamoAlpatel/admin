import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App';
import Team from './comp/pags/team/Team';
import Dashboard from './comp/pags/dashboard/Dashboard';
import Contact from './comp/pags/contact/Contact';
import Invoices from './comp/pags/invoices/Invoices';
import Form from './comp/pags/form/Form';
import Calendar from './comp/pags/calendar/Calendar';
import Faq from './comp/pags/faq/Faq';
import BarChart from './comp/pags/barChart/BarChart';
import PieChart from './comp/pags/pieCahrt/PieChart';
import LineChart from './comp/pags/LineChart/LineChart';
import GeographChart from './comp/pags/geography/GeographChart';
import NotFound from './comp/pags/not found/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path='team' element={<Team />} />
      <Route path='contacts' element={<Contact />} />
      <Route path='invoices' element={<Invoices />} />
      <Route path='form' element={<Form />} />
      <Route path='caledar' element={<Calendar />} />
      <Route path='faq' element={<Faq />} />
      <Route path='bar' element={<BarChart />} />
      <Route path='pie' element={<PieChart />} />
      <Route path='line' element={<LineChart />} />
      <Route path='geography' element={<GeographChart />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

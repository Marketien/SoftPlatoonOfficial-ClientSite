import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout';
import ErrorPage from './Components/Pages/ErrorPage/ErrorPage';
import Home from './Components/Pages/Home/Home';
import OurServices from './Components/Pages/OurServices/OurServices';
import AboutUs from './Components/Pages/AboutUs/AboutUs';
import GetProposal from './Components/Pages/GetProposal/GetProposal';
import Industries from './Components/Pages/Industries/Industries';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/ourServices",
        element: <OurServices />,
      },
      {
        path: "/industries",
        element: <Industries />,
      },
      {
        path: "/aboutUs",
        element: < AboutUs/>,
      },
      {
        path: "/getProposal",
        element: < GetProposal/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

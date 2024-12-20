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
import WebAppsService from './Components/Pages/IndividualServices/WebAppsService/WebAppsService';
import SoftWareService from './Components/Pages/IndividualServices/SoftWareService';
import ErpService from './Components/Pages/IndividualServices/ErpService';
import SoftwareDevelopmentSweden from './Components/Pages/SoftwareDevelopmentSweden/SoftwareDevelopmentSweden';
import WebAppDynamicPage from './Components/Pages/IndividualServices/WebAppsService/WebAppDemoProjects/WebAppDynamicPage';

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
        path: "/our-services",
        element: <OurServices />,
      },
      {
        path: "/our-services/web-app-Services",
        element: <WebAppsService />,
      },
      {
        path: "/our-services/web-app-Services/web-app-demos",
        element: <WebAppDynamicPage />,
      },
      {
        path: "/software-Services",
        element: <SoftWareService />,
      },
      {
        path: "/erp-Services",
        element: <ErpService />,
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
      {
        path: "/Mjukvaruutvecklare-Sverige",
        element: < SoftwareDevelopmentSweden/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

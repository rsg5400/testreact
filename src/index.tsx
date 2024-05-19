import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import Root from './Pages/Root';
import HelpDesk from './Pages/HelpDesk';


import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <Root />,
   /* errorElement: <ErrorPage />,*/
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "helpdesk",
        element: <HelpDesk />,
        /* add children nodes here */
      
      },
      
    ],
  },
]);




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

